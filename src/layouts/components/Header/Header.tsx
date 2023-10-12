import styled from "@emotion/styled";
import logo from "src/assets/logo.svg";
import { GENERAL_FONTS, BREAKPOINTS } from "src/styles/constants";
import NavBar from "../NavBar";

const Header = () => {

    const StyledHeader = styled.header({
        width: '100%'
    });

    const StyledLogoContainer = styled.div({
        fontFamily: GENERAL_FONTS.primary,
        fontWeight: 900,
        fontSize: '1.7rem',
        flex: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        textAlign: 'center',
        [BREAKPOINTS.max.small]: {
            fontSize: '1rem'
        },
    });

    const StyledLogoImage = styled.img((props: { rotate: number }) => ({
        width: 'auto',
        height: 70,
        transform: `rotate(${props.rotate}deg)`,
        [BREAKPOINTS.max.small]: {
            height: 40
        }
    }));

    return (
        <StyledHeader>
            <StyledLogoContainer>
                <StyledLogoImage src={logo} alt="Gilded Rose" rotate={320} />
                <h1>Gilded Rose</h1>
                <StyledLogoImage src={logo} alt="Gilded Rose" rotate={40} />
            </StyledLogoContainer>
            <NavBar />
        </StyledHeader>
    );
}

export default Header;