import Header from "./components/Header";
import styled from "@emotion/styled";

const MainLayout = ({ children }) => {
    const WRAPPER_MAX_WIDTH = 900;
    const WRAPPER_X_PADDING = 20;
    
    const StyledWrapper = styled.div({
        width: '100%',
        maxWidth: WRAPPER_MAX_WIDTH,
        margin: '0 auto',
        padding: `0 ${WRAPPER_X_PADDING}px`,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    });

    const StyledMain = styled.main({
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    });

    const StyledFooter = styled.footer({
        width: '100%',
        textAlign: 'center',
        padding: '10px 0'
    });

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
