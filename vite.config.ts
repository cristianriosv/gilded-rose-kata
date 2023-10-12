import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from '@svgr/rollup';

export default defineConfig({
    base: '',
    plugins: [
        svgr(),
        react(),
        viteTsconfigPaths()
    ],
    server: {    
        open: true,
        port: 3000, 
    },
})
