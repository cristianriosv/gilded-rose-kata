import useAppContext from "src/store/useAppContext";

const InventoryList = () => {
    const { gildedRoseInventory } = useAppContext();

    return (
        <div>
            <table>
                <thead>
                    <th>Item name</th>
                    <th>Sell in days</th>
                    <th>Quality</th>
                </thead>
                {gildedRoseInventory.items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.sellIn}</td>
                        <td>{item.quality}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default InventoryList;
