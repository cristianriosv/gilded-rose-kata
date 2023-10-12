import { ThemeProvider } from '@emotion/react'
import InventoryListFeature from './features/inventoryList/views/InventoryList';
import MainLayout from '@layouts/MainLayout';
import AppProvider from '@store/AppProvider';
import { ThemeProps, theme } from '@styles/theme';
import GlobalStyles from '@styles/global';

function App() {
  return (
    <ThemeProvider theme={theme as ThemeProps} >
      <GlobalStyles />
      <AppProvider>
        <MainLayout>
          <InventoryListFeature  />
        </MainLayout>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
