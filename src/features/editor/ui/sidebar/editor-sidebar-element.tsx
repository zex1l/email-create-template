import { SidebarElementComponent } from '../../data/component.data';
import { SidebarElementLayout } from '../../data/layout.data';

const itemClassName =
  'shadow-sm flex cursor-pointer items-center flex-col gap-2 border border-gray-200 p-2 rounded-xl group hover:shadow-md hover:border-primary';

export const EditorSideBarElementLayout = ({
  element,
}: {
  element: SidebarElementLayout;
}) => {
  return (
    <div className={itemClassName}>
      {<element.icon className="w-6 h-6 min-w-6 group-hover:text-primary" />}
      <h2 className="text-sm">{element.label}</h2>
    </div>
  );
};

export const EditorSideBarElementComponent = ({
  element,
}: {
  element: SidebarElementComponent;
}) => {
  return (
    <div className={itemClassName}>
      {<element.icon className="w-6 h-6 min-w-6 group-hover:text-primary" />}
      <h2 className="text-sm">{element.label}</h2>
    </div>
  );
};
