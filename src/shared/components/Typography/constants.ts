export enum TypeOfTypographyVariants {
    body = 'body',
    title = 'title',
    subtitle = 'subtitle',
    caption = 'caption',
    link = 'link',
}

type TypeOfTypographyProps = {
    tag: 'div' | 'h1' | 'h2' | 'span',
    style: Record<string, number | string>
}

export const TYPES_OF_TYPOGRAPHY: Record<string, TypeOfTypographyProps> = {
    [TypeOfTypographyVariants.body]: {
        tag: 'div',
        style: {
            fontSize: '1rem',
            lineHeight: 1.5,
        }
    },
    [TypeOfTypographyVariants.title]: {
        tag: 'h1',
        style: {
            fontSize: '2.5rem',
            lineHeight: 1.5,
        }
    },
    [TypeOfTypographyVariants.subtitle]: {
        tag: 'h2',
        style: {
            fontSize: '2rem',
            lineHeight: 1.5,
        }
    },
    [TypeOfTypographyVariants.caption]: {
        tag: 'span',
        style: {
            fontSize: '0.8rem',
            lineHeight: 1.5,
        }
    },
    [TypeOfTypographyVariants.link]: {
        tag: 'span',
        style: {
            fontSize: '0.8rem',
            lineHeight: 1.5,
        }
    },
};