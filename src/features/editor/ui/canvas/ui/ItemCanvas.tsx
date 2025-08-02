import { SidebarElementComponent } from '@/features/editor/data/component.data';

import { ButtonComponent } from './button/button';
import { DividerComponent } from './divider/divider';
import { TextComponent } from './text/text';
import { ImageComponent } from './image/image';
import { ComponentTypeInLayout } from '@/features/editor/data/layout.data';

export const ItemCanvas = (element: ComponentTypeInLayout) => {
  switch (element?.type) {
    case 'button':
      return <ButtonComponent element={element} />;
    case 'text':
      return <TextComponent element={element} />;
    case 'image':
      return <ImageComponent element={element} />;
    case 'divider':
      return <DividerComponent element={element} />;
  }
};
