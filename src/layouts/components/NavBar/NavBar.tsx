import styled from "@emotion/styled";
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
                <div>Day: {currentDate.toDateString()}</div>
                <button onClick={() => handleUpdateToNextDay()}>Jump to next day</button>
            </StyledMainMenu>
        </StyledNavBar>
    );
}

export default NavBar;
