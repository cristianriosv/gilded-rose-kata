export type ThemeProps = typeof theme;

const DEVICE_SIZES = {
    small: 576
}

const COLORS = {
    primary: 'rgb(174 169 45)',
    secondary: 'rgb(53 51 22)',
    primaryLight: 'rgb(215 210 84)',
    background: 'rgb(36 36 36)',
}

const FONTS = {
    primary: 'Almendra SC',
    secondary: 'Texturina',
}

export const theme = {
    colors: COLORS,
    fonts: FONTS,
    breakpoitns: {
        max: Object.fromEntries(
            Object.entries(DEVICE_SIZES).map(([key, value]) => [key, `@media (max-width: ${value}px)`]),
        )
    },
    buttons: {
        colors: {
            primary: {
                color: COLORS.secondary,
                background: COLORS.primary,
                hover: {
                    background: COLORS.primaryLight
                }
            },
            secondary: {
                color: COLORS.primary,
                background: COLORS.secondary,
                hover: {
                    background: COLORS.primary
                }
            },
        },
        sizes: {
            small: {
                padding: '5px 10px',
            },
            medium: {
                padding: '10px 20px',
            },
            large: {
                padding: '15px 30px',
            }
        }
    },
    table: {
        borderColor: COLORS.primary,
        tr: {
            hover: {
                background: `linear-gradient(to bottom, rgba(0,0,0,0), ${COLORS.secondary})`,
                color: 'rgb(255 255 255)',
            }
        }
    },
    typography: {
        body: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        title: {
            fontFamily: FONTS.secondary,
            fontSize: '2.3rem',
            lineHeight: 1.5,
        },
        subtitle: {
            fontFamily: FONTS.primary,
            fontSize: '2rem',
            lineHeight: 1.5,
        },
        caption: {
            fontSize: '0.8rem',
            lineHeight: 1.5,
        },
        link: {
            fontSize: '0.8rem',
            lineHeight: 1.5,
        },
    }
}