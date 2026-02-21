import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './shared/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/styles.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  );
}
