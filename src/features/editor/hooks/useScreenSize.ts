import { useState } from 'react';

export type ScreenType = 'desktop' | 'mobile';

export const useScreenSize = () => {
  const [screen, setScreen] = useState<ScreenType>('desktop');

  return {
    screen,
    setScreen,
  };
};
