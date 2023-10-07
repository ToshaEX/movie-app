import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './index.scss';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient({});

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
