import useAppContext from "@store/useAppContext";
import { INVENTORY_LIST_LABELS } from "../constants/labels";
import Typography from "@shared/components/Typography";

const InventoryList = () => {
    const { gildedRoseInventory } = useAppContext();

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>{INVENTORY_LIST_LABELS.itemName}</th>
                        <th>{INVENTORY_LIST_LABELS.sellIn}</th>
                        <th>{INVENTORY_LIST_LABELS.qualiity}</th>
                    </tr>
                </thead>
                <tbody>
                    {gildedRoseInventory.items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td><Typography font="primary" sizeRem={1.6}>{item.sellIn}</Typography></td>
                            <td><Typography font="primary" sizeRem={1.6}>{item.quality}</Typography></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InventoryList;
