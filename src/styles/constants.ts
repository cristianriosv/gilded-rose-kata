export enum TypeOfFonts {
    primary = 'primary',
    secondary = 'secondary',
}

export const GENERAL_FONTS = {
    [TypeOfFonts.primary]: 'Almendra SC',
    [TypeOfFonts.secondary]: 'Texturina',
};

const DEVICE_SIZES = {
    small: 576
}
export const BREAKPOINTS = {
    max: Object.fromEntries(
        Object.entries(DEVICE_SIZES).map(([key, value]) => [key, `@media (max-width: ${value}px)`]),
    )
}