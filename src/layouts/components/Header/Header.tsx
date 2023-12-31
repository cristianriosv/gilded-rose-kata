import styled from "@emotion/styled";
import logo from "@assets/logo.svg";
import NavBar from "@layouts/components/NavBar";
import useMyTheme from "@styles/useMyTheme";

const Header = () => {
    const theme = useMyTheme();
    const StyledHeader = styled.header({
        width: '100%'
    });

    const StyledLogoContainer = styled.div({
        flex: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        textAlign: 'center',
        padding: '20px 0'
    });

    const StyledLogoTitle = styled.div({
        fontFamily: theme.colors.primary,
        fontWeight: 900,
        fontSize: '3.6rem',
        [theme.breakpoitns.max.small]: {
            fontSize: '2.3rem'
        },
    });

    const StyledLogoImage = styled.img((props: { rotate: number }) => ({
        width: 'auto',
        height: 70,
        transform: `rotate(${props.rotate}deg)`,
        [theme.breakpoitns.max.small]: {
            height: 40
        }
    }));

    return (
        <StyledHeader>
            <StyledLogoContainer>
                <StyledLogoImage src={logo} alt="Gilded Rose" rotate={320} />
                <StyledLogoTitle>Gilded Rose</StyledLogoTitle>
                <StyledLogoImage src={logo} alt="Gilded Rose" rotate={40} />
            </StyledLogoContainer>
            <NavBar />
        </StyledHeader>
    );
}

export default Header;