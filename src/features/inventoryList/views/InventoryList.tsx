import styled from "@emotion/styled";
import useAppContext from "@store/useAppContext";
import { INVENTORY_LIST_LABELS } from "../constants/labels";
import Typography from "@shared/components/Typography";
import Table, { ColumnProps } from "@shared/components/Table/Table";

const InventoryList = () => {
    const { gildedRoseInventory } = useAppContext();
    const columns: ColumnProps[] = [
        { header: INVENTORY_LIST_LABELS.itemName, dataKey: 'name' },
        { header: INVENTORY_LIST_LABELS.sellIn, dataKey: 'sellIn', align: 'center',
            cellRender: (data) => <Typography sizeRem={1.4}>{data}</Typography>
        },
        { header: INVENTORY_LIST_LABELS.qualiity, dataKey: 'quality', align: 'center',
            cellRender: (data) => <Typography sizeRem={1.4}>{data}</Typography>
        },
    ]

    const StyledInventoryList = styled.div({
        width: '100%',
    });
    return (
        <StyledInventoryList>
            <Typography variant="title">
                {INVENTORY_LIST_LABELS.title}
            </Typography>
            <Table columns={columns} data={gildedRoseInventory} emptyMessage={INVENTORY_LIST_LABELS.emptyInventory} />
        </StyledInventoryList>
    )
}

export default InventoryList;
