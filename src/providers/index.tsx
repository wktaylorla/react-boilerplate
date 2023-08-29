import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import store, { persistor } from '../store/configureStore';
import GlobalStyles from '../styles/GlobalStyles';
import GlobalTheme from '../styles/GlobalTheme';

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={GlobalTheme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default AppProvider;
