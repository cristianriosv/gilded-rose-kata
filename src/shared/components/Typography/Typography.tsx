import styled from "@emotion/styled";
import useMyTheme from "@styles/useMyTheme";

enum TypeOfTypographyVariants {
    body = 'body',
    title = 'title',
    subtitle = 'subtitle',
    caption = 'caption',
    link = 'link',
}

type TypographyProps = {
    variant?: keyof typeof TypeOfTypographyVariants,
    children: React.ReactNode,
    font?: string,
    tag?: keyof JSX.IntrinsicElements,
    sizeRem?: number
};

const Typography = ({ children, font, tag, sizeRem, variant = 'body' }: TypographyProps) => {
    const theme = useMyTheme();

    const TYPES_OF_TYPOGRAPHY_TAGS: Record<TypeOfTypographyVariants, keyof JSX.IntrinsicElements> = {
        body: 'div',
        title: 'h1',
        subtitle: 'h2',
        caption: 'span',
        link: 'span'
    };

    const StyledTypography = styled(tag || TYPES_OF_TYPOGRAPHY_TAGS[variant])({
        ...theme.typography[variant],
        ...(font && { fontFamily: theme.fonts[font] }),
        ...(sizeRem && { fontSize: `${sizeRem}rem` })
    });

    return <StyledTypography>{children}</StyledTypography>;
}

export default Typography;
