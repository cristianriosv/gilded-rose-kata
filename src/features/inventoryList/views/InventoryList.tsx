import useAppContext from "@store/useAppContext";

const InventoryList = () => {
    const { gildedRoseInventory } = useAppContext();

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item name</th>
                        <th>Sell in days</th>
                        <th>Quality</th>
                    </tr>
                </thead>
                <tbody>
                    {gildedRoseInventory.items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.sellIn}</td>
                            <td>{item.quality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InventoryList;
