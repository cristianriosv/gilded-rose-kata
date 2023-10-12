export type ThemeProps = typeof theme;

const DEVICE_SIZES = {
    small: 576
}

const COLORS = {
    primary: 'rgb(174 169 45)',
    secondary: 'rgb(53 51 22)',
    primaryLight: 'rgb(215 210 84)',
}

export const theme = {
    colors: COLORS,
    fonts: {
        primary: 'Almendra SC',
        secondary: 'Texturina',
    },
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
    }
}