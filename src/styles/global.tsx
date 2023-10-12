import { Global, css } from '@emotion/react';
import { GENERAL_FONTS } from './constants';

const GlobalStyles = () => {
    const fontImports = Object.values(GENERAL_FONTS).map((font) => {
        const fontUrlName = font.replace(/ /g, '+');
        return `@import url('https://fonts.googleapis.com/css2?family=${fontUrlName}:wght@400;500;600;900&display=swap');`
    });
    return (
        <Global
            styles={css`
            ${fontImports.join('\n')}
            :root {
                font-family: '${GENERAL_FONTS.secondary}', cursive;
                font-size: 16px;
            
                color-scheme: light dark;
                color: rgba(255, 255, 255, 0.87);
                background-color: #242424;
            
                font-synthesis: none;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                -webkit-text-size-adjust: 100%;
            }
            
            a {
                font-weight: 500;
                color: #646cff;
                text-decoration: inherit;
            }
            a:hover {
                color: #535bf2;
            }
            
            body {
                margin: 0;
                display: flex;
                place-items: center;
                min-width: 320px;
            }
            
            #root {
                display: flex;
                width: 100%;
            }
            `}
        />
    );
}

export default GlobalStyles;
