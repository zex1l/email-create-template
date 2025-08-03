import { SidebarElementComponent } from '@/features/editor/data/component.data';
import { ComponentTypeInLayout } from '@/features/editor/data/layout.data';

export const TextComponent = ({
  element,
}: {
  element: ComponentTypeInLayout;
}) => {
  const { content, style } = element;

  return (
    <div style={style} dangerouslySetInnerHTML={{ __html: content }}>
    </div>
  );
};
