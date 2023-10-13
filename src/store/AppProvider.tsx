import { ReactNode, useState } from 'react';
import { GildedRose } from '@/gilded-rose';
import { AppContext } from './AppContext';
import { getNewRandomItem } from '@shared/utils/getNewRandomItem';

type AppProviderProps = {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    const generatedRandomItems = new Array(5).fill(null).map(() => (getNewRandomItem()))
    const [gildedRoseInventory, setGildedRoseInventory] = useState(generatedRandomItems);
    const gildedRoseManagement = new GildedRose(gildedRoseInventory);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const updateToNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
        setGildedRoseInventory(gildedRoseManagement.updateQuality());
    }

    const addNewItem = (name: string, sellIn: number, quality: number) => {
        gildedRoseManagement.items.unshift({ name, sellIn, quality });
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
