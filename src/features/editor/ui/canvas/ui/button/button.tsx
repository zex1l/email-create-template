import { SidebarElementComponent } from '@/features/editor/data/component.data';
import { ComponentTypeInLayout } from '@/features/editor/data/layout.data';

export const ButtonComponent = ({
  element,
}: {
  element: ComponentTypeInLayout;
}) => {
  const { content, style, outerStyle, url } = element;

  return (
    <a href={url}>
      <button style={style} className={outerStyle}>
        {content}
      </button>
    </a>
  );
};
