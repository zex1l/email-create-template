'use client';
import ConvexClientProvider from './convex.provider';
import { ModalProvider } from './modal.provider';
import { Toaster } from 'sonner';

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexClientProvider>
      {children}
      <ModalProvider />
      <Toaster richColors position="bottom-right" />
    </ConvexClientProvider>
  );
};
