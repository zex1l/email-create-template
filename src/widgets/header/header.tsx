'use client';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { Authenticated, Unauthenticated } from 'convex/react';
import { useAuthActions } from '@convex-dev/auth/react';

const Header = () => {
  const { signOut } = useAuthActions();

  return (
    <div className="h-14 shadow">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link className="text-xl font-semibold uppercase" href="/">
          Email builder
        </Link>
        <Unauthenticated>
          <Button>
            <Link href="/auth">Get started</Link>
          </Button>
        </Unauthenticated>
        <Authenticated>
          <div className='flex gap-2'>
            <Button variant={'outline'}>
              <Link href={'/boards'}>Dashboards</Link>
            </Button>
            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        </Authenticated>
      </div>
    </div>
  );
};

export default Header;
