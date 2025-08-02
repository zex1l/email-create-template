import { convexAuthNextjsToken } from '@convex-dev/auth/nextjs/server';
import { fetchQuery } from 'convex/nextjs';
import { FunctionReference } from 'convex/server';

type Props = {
  method: FunctionReference<"query">;
};

export const fetchQueryBase = async ({ method }: Props) => {
  fetchQuery(method, {}, { token: await convexAuthNextjsToken() });
};
