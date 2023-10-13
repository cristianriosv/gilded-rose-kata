import styled from "@emotion/styled";
import { INVENTORY_LIST_LABELS } from "@features/inventoryList/constants/labels";
import Button from "@shared/components/Button";
import { getNewRandomItem } from "@shared/utils/getNewRandomItem";
import useAppContext from "@store/useAppContext";

const AddNewItem = () => {
    const { addNewItem } = useAppContext();

    const handleAddNewItem = () => {
        const { name, sellIn, quality } = getNewRandomItem();
        addNewItem(name, sellIn, quality);
    }

    const StyledAddNewItemContainer = styled.div({
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px 0'
    });

    return (
        <StyledAddNewItemContainer>
            <Button variant="primary" size="small" onClick={handleAddNewItem}>
                {INVENTORY_LIST_LABELS.addItem}
            </Button>
        </StyledAddNewItemContainer>
    )
}

export default AddNewItem;