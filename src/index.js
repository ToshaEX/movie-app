import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const queryClient = new QueryClient({
  defaultOptions: { queries: { cacheTime: 10000 } },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
