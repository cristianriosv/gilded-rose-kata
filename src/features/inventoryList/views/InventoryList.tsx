import styled from "@emotion/styled";
import useAppContext from "@store/useAppContext";
import { INVENTORY_LIST_LABELS } from "../constants/labels";
import Typography from "@shared/components/Typography";
import Table, { ColumnProps } from "@shared/components/Table/Table";
import Button from "@shared/components/Button/Button";
import { ReactComponent as Fire } from "@assets/icons/fire.svg";

const InventoryList = () => {
    const { gildedRoseInventory, removeItemByPosition } = useAppContext();
    const columns: ColumnProps[] = [
        { header: INVENTORY_LIST_LABELS.itemName, dataKey: 'name' },
        { header: INVENTORY_LIST_LABELS.sellIn, dataKey: 'sellIn', align: 'center',
            cellRender: (row) => <Typography sizeRem={1.4}>{row.sellIn}</Typography>
        },
        { header: INVENTORY_LIST_LABELS.qualiity, dataKey: 'quality', align: 'center',
            cellRender: (row) => <Typography sizeRem={1.4}>{row.quality}</Typography>
        },
        { header: '',
            cellRender: (_, index) => (
                <Button variant="secondary" size="small" onClick={() => removeItemByPosition(index)}>
                    <Fire width="20" height="20" viewBox="0 0 280 280" />
                </Button>
            )
        }
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
