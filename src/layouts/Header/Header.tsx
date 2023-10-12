import useAppContext from "src/store/useAppContext";
import styled from "@emotion/styled";

const Header = () => {
    const { updateToNextDay, currentDate } = useAppContext();
    const handleUpdateToNextDay = () => {
        updateToNextDay();
    }

    const StyledHeader = styled.header`
        width: 100%;
    `;
    return (
        <StyledHeader>
            <h1>Gilded Rose</h1>
            <div>Current day: {currentDate.toDateString()}</div>
            <button onClick={() => handleUpdateToNextDay()}>Update to next day</button>
            <hr />
        </StyledHeader>
    );
}

export default Header;