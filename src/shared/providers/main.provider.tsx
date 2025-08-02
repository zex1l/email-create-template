'use client'
import ConvexClientProvider from './convex.provider';

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
      <ConvexClientProvider>{children}</ConvexClientProvider>
  );
};
