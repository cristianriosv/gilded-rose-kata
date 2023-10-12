import InventoryListFeature from './features/inventoryList/views/InventoryList';
import MainLayout from '@layouts/MainLayout';
import AppProvider from '@store/AppProvider';

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <InventoryListFeature  />
      </MainLayout>
    </AppProvider>
  )
}

export default App
