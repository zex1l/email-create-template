import { SidebarElementComponent } from '@/features/editor/data/component.data';
import { ComponentTypeInLayout } from '@/features/editor/data/layout.data';

export const DividerComponent = ({
  element,
}: {
  element: ComponentTypeInLayout;
}) => {
  const { style } = element;

  return <div style={style}></div>;
};
