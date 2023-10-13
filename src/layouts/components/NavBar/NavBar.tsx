import styled from "@emotion/styled";
import Button from "@shared/components/Button";
import Typography from "@shared/components/Typography";
import { SHARED_LABELS } from "@shared/constants/labels";
import useAppContext from "@store/useAppContext";

const NavBar = () => {
    const { updateToNextDay, currentDate } = useAppContext();
    const handleUpdateToNextDay = () => {
        updateToNextDay();
    }

    const StyledNavBar = styled.nav({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 0'
    });
    const StyledMainMenu = styled.div({
        flex: 0.5,
        display: 'flex',
        gap: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'right'
    });

    return (
        <StyledNavBar>
            <StyledMainMenu>
                <Typography>
                    <Typography tag="span" font="primary" sizeRem={1.2}>
                        {SHARED_LABELS.day}:
                    </Typography>
                    {' '}
                    {currentDate.toDateString()}
                </Typography>
                <Button size="small" onClick={() => handleUpdateToNextDay()}>
                    {SHARED_LABELS.nextDay}
                </Button>
            </StyledMainMenu>
        </StyledNavBar>
    );
}

export default NavBar;
