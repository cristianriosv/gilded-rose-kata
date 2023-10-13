import styled from "@emotion/styled";
import useMyTheme from "@styles/useMyTheme";

const enum TypeOfButtonsVariants {
    primary = 'primary',
    secondary = 'secondary'
}

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    variant?: keyof typeof TypeOfButtonsVariants,
    size?: 'small' | 'medium' | 'large'
}

const Button = ({ children, variant = "primary", size = "medium", ...props }: ButtonProps) => {
    const theme = useMyTheme();
    const StyledButton = styled.button({
        border: 'none',
        borderRadius: 5,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backgroundColor: theme.buttons.colors[variant].background,
        color: theme.buttons.colors[variant].color,
        fontFamily: theme.fonts.secondary,
        fontWeight: 900,
        padding: theme.buttons.sizes[size].padding,
        position: 'relative',
        ':after': {
            content: '""',
            position: 'absolute',
            borderRadius: 2,
            top: 0,
            left: 1,
            width: 0,
            height: '100%',
            backgroundColor:'rgba(255,255,255,1)',
            boxShadow: '0 0px 10px rgba(255,255,255, 1)',
            transition: 'none'
        },
        ':hover': {
            boxShadow: '0 0px 5px rgba(255,255,255, 0.8)',
            transition: 'all 0.3s ease-in-out',
            backgroundColor: theme.buttons.colors[variant].hover.background,
            color: theme.buttons.colors[variant].hover.color,
            ':after': {
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0)',
                boxShadow: '0 0px 10px rgba(255,255,255, 0)',
                transition: 'all 0.3s ease-in-out'
            }
        }
    });

    return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
