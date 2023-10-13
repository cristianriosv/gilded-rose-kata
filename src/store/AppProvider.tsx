import { ReactNode, useState } from 'react';
import { GildedRose } from '@/gilded-rose';
import { AppContext } from './AppContext';

const INITIAL_ITEMS = [
    { name: 'Common item 1', sellIn: 10, quality: 20 },
    { name: 'Common item 2', sellIn: 10, quality: 20 },
    { name: 'Aged Brie item', sellIn: 10, quality: 20 },
    { name: 'Sulfuras item', sellIn: 10, quality: 80 },
    { name: 'Backstage passes to Cristian Rios Concert', sellIn: 15, quality: 20 },
    { name: 'Conjured item', sellIn: 10, quality: 50 }
]

type AppProviderProps = {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    const [gildedRoseInventory, setGildedRoseInventory] = useState(INITIAL_ITEMS);
    const gildedRoseManagement = new GildedRose(gildedRoseInventory);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const updateToNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
        setGildedRoseInventory(gildedRoseManagement.updateQuality());
    }

    const addNewItem = (name: string, sellIn: number, quality: number) => {
        gildedRoseManagement.items.push({ name, sellIn, quality });
        setGildedRoseInventory([...gildedRoseManagement.items]);
    }

    const removeItemByPosition = (index: number) => {
        gildedRoseManagement.items.splice(index, 1);
        setGildedRoseInventory([...gildedRoseManagement.items]);
    }

    return (
        <AppContext.Provider value={{
            gildedRoseInventory,
            currentDate,
            updateToNextDay,
            addNewItem,
            removeItemByPosition
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
