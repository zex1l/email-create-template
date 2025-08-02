import { Password } from '@convex-dev/auth/providers/Password';
import { convexAuth } from '@convex-dev/auth/server';

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      id: 'password',
      profile(params, _ctx) {
        return {
          email: params.email as string,
          name: params.name as string,
        };
      },
    }),
  ],
});
