import { createContext } from "react";

type AppContextStateProps = {
    gildedRoseInventory: any;
    currentDate: Date;
    updateToNextDay: () => void;
}

export const AppContext = createContext<AppContextStateProps>({
    gildedRoseInventory: null,
    currentDate: null,
    updateToNextDay: () => null
});