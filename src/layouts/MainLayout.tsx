import Header from "./Header/";
import styled from "@emotion/styled";

const MainLayout = ({ children }) => {
    const WRAPPER_MAX_WIDTH = 900;
    const WRAPPER_X_PADDING = 20;
    const StyledWrapper = styled.div`
        width: 100%;
        max-width: ${WRAPPER_MAX_WIDTH}px;
        margin: 0 auto;
        padding: 0 ${WRAPPER_X_PADDING}px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    `;

    const StyledMain = styled.main`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const StyledFooter = styled.footer`
        width: 100%;
        text-align: center;
        padding: 10px 0;
    `;

    return (
        <StyledWrapper>
            <Header />
            <StyledMain>
                {children}
            </StyledMain>
            <StyledFooter>
                Made with ❤️ by Cristian
            </StyledFooter>
        </StyledWrapper>
    );
}

export default MainLayout;
