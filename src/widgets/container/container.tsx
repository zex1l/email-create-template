import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="w-full min-h-[85%] mt-10 container mx-auto">{children}</div>;
};

export default Container;
