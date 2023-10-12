import { ReactNode, useState } from 'react';
import { GildedRose } from '@/gilded-rose';
import { AppContext } from './AppContext';

const INITIAL_ITEMS = [
    { name: 'Common item 1', sellIn: 5, quality: 20 },
    { name: 'Common item 2', sellIn: 5, quality: 20 },
    { name: 'Aged Brie item', sellIn: 5, quality: 20 },
    { name: 'Sulfurus item', sellIn: 5, quality: 20 },
    { name: 'Backtage passes to Cristian Rios Concert', sellIn: 5, quality: 20 }
]

type AppProviderProps = {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    const gildedRoseInventory = new GildedRose(INITIAL_ITEMS);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const updateToNextDay = () => {
        setCurrentDate((currentDate) => new Date(currentDate.setDate(currentDate.getDate() + 1)));
        gildedRoseInventory.updateQuality();
    }

    return (
        <AppContext.Provider value={{ gildedRoseInventory, currentDate, updateToNextDay }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
