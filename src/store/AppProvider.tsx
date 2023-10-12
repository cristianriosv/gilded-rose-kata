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
    const gildedRoseInventory = new GildedRose(INITIAL_ITEMS);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const updateToNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1)
        setCurrentDate(newDate);
        gildedRoseInventory.updateQuality();
    }

    return (
        <AppContext.Provider value={{ gildedRoseInventory, currentDate, updateToNextDay }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
