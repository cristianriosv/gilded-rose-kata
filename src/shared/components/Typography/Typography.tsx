import styled from "@emotion/styled";
import { TYPES_OF_TYPOGRAPHY, TypeOfTypographyVariants } from "./constants";
import { GENERAL_FONTS, TypeOfFonts } from "@styles/constants";

type TypographyProps = {
    variant?: keyof typeof TypeOfTypographyVariants,
    children: React.ReactNode,
    font?: keyof typeof TypeOfFonts,
    tag?: keyof JSX.IntrinsicElements,
    sizeRem?: number
};

const Typography = ({ children, font, tag, sizeRem, variant = 'body' }: TypographyProps) => {
    const StyledTypography = styled(tag || TYPES_OF_TYPOGRAPHY[variant].tag)({
        ...TYPES_OF_TYPOGRAPHY[variant].style,
        ...(font && { fontFamily: GENERAL_FONTS[font] }),
        ...(sizeRem && { fontSize: `${sizeRem}rem` })
    });

    return <StyledTypography>{children}</StyledTypography>;
}

export default Typography;
