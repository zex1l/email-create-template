'use client';
import { ConvexAuthNextjsProvider } from '@convex-dev/auth/nextjs';
import { ConvexReactClient } from 'convex/react';
import { useEffect } from 'react';
import { getProfile } from '../../../convex/users';
import { fetchQueryBase } from '../api/fetchQuery';
import { api } from '../../../convex/_generated/api';

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string,
  {
    verbose: true,
  }
);
const ConvexClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexAuthNextjsProvider client={convex}>
      {children}
    </ConvexAuthNextjsProvider>
  );
};

export default ConvexClientProvider;
