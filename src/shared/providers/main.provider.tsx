'use client'
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ConvexClientProvider from './convex.provider';

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </Provider>
  );
};
