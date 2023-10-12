import { ReactNode, useState } from 'react';
import { GildedRose } from '@/gilded-rose';
import { AppContext } from './AppContext';

const INITIAL_ITEMS = [
    { name: 'Common item 1', sellIn: 10, quality: 20 },
    { name: 'Common item 2', sellIn: 10, quality: 20 },
    { name: 'Aged Brie item', sellIn: 10, quality: 20 },
    { name: 'Sulfurus item', sellIn: 10, quality: 20 },
    { name: 'Backtage passes to Cristian Rios Concert', sellIn: 10, quality: 20 }
]

type AppProviderProps = {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    const [gildedRoseInventory] = useState<GildedRose>(new GildedRose(INITIAL_ITEMS));

    return (
        <AppContext.Provider value={{ gildedRoseInventory }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
