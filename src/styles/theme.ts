export type ThemeProps = typeof theme;

const DEVICE_SIZES = {
    small: 576
}

const COLORS = {
    primary: '#AEA92D',
    secondary: '#353316',
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
        primary: {
            color: COLORS.secondary,
            background: COLORS.primary
        },
        secondary: {
            color: COLORS.primary,
            background: COLORS.secondary,
        },
    }
}