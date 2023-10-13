import { Item as GildedRoseItem } from "@/gilded-rose";
import { createContext } from "react";

type AppContextStateProps = {
    gildedRoseInventory: GildedRoseItem[];
    currentDate: Date;
    updateToNextDay: () => void;
    addNewItem: (name: string, sellIn: number, quality: number) => void;
    removeItemByPosition: (position: number) => void;
}

export const AppContext = createContext<AppContextStateProps>({
    gildedRoseInventory: null,
    currentDate: null,
    updateToNextDay: () => null,
    addNewItem: () => null,
    removeItemByPosition: () => null,
});