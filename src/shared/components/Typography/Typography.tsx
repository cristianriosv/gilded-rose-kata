import styled from "@emotion/styled";
import { TYPES_OF_TYPOGRAPHY, TypeOfTypographyVariants } from "./constants";
import useMyTheme from "@styles/useMyTheme";

type TypographyProps = {
    variant?: keyof typeof TypeOfTypographyVariants,
    children: React.ReactNode,
    font?: string,
    tag?: keyof JSX.IntrinsicElements,
    sizeRem?: number
};

const Typography = ({ children, font, tag, sizeRem, variant = 'body' }: TypographyProps) => {
    const theme = useMyTheme();
    const StyledTypography = styled(tag || TYPES_OF_TYPOGRAPHY[variant].tag)({
        ...TYPES_OF_TYPOGRAPHY[variant].style,
        ...(font && { fontFamily: theme.fonts[font] }),
        ...(sizeRem && { fontSize: `${sizeRem}rem` })
    });

    return <StyledTypography>{children}</StyledTypography>;
}

export default Typography;
