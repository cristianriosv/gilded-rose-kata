import useAppContext from "src/store/useAppContext";

const Header = () => {
    const { updateToNextDay, currentDate } = useAppContext();
    const handleUpdateToNextDay = () => {
        updateToNextDay();
    }
    return (
        <header>
            <div>
                <h1>Gilded Rose</h1>
                <div>Current day: {currentDate.toDateString()}</div>
                <button onClick={() => handleUpdateToNextDay()}>Update to next day</button>
                <hr />
            </div>
        </header>
    );
}

export default Header;