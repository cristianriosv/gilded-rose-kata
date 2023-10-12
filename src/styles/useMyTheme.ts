import { useTheme } from "@emotion/react";
import { ThemeProps } from "./theme";

const useMyTheme = () => {
    return useTheme() as ThemeProps;
};

export default useMyTheme;