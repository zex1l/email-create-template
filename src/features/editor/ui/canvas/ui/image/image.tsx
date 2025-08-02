import { SidebarElementComponent } from '@/features/editor/data/component.data';
import { ComponentTypeInLayout } from '@/features/editor/data/layout.data';

export const ImageComponent = ({
  element,
}: {
  element: ComponentTypeInLayout;
}) => {
  const { style, alt, imageUrl, outerStyle } = element;

  return (
    <div className={outerStyle}>
      <img style={style} src={imageUrl} alt={alt} />
    </div>
  );
};
