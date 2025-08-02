import { SidebarElementComponent } from '@/features/editor/data/component.data';
import { ComponentTypeInLayout } from '@/features/editor/data/layout.data';

export const ImageComponent = ({
  element,
}: {
  element: ComponentTypeInLayout;
}) => {
  const { style, alt, imageUrl, outerStyle, url } = element;

  if (url !== '')
    return (
      <div className={outerStyle}>
        <a href={url} target='_blank'>
          <img style={style} src={imageUrl} alt={alt} />
        </a>
      </div>
    );

  return (
    <div className={outerStyle}>
      <img style={style} src={imageUrl} alt={alt} />
    </div>
  );
};
