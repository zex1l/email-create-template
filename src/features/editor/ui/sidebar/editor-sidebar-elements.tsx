import { SidebarElementComponent } from '../../data/component.data';
import { SidebarElementLayout } from '../../data/layout.data';
import {
  EditorSideBarElementLayout,
  EditorSideBarElementComponent,
} from './editor-sidebar-element';

export const EditorSideBarElements = ({
  elementsLayout,
  elementsComponents,
  onDragComponentStart,
  onDragLayoutStart,
}: {
  elementsLayout: SidebarElementLayout[];
  elementsComponents: SidebarElementComponent[];
  onDragLayoutStart: (layout: SidebarElementLayout) => void;
  onDragComponentStart: (component: SidebarElementComponent) => void;
}) => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h2 className="font-bold text-lg">Layouts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {elementsLayout.map((element, key) => (
          <div
            key={key}
            draggable
            onDragStart={() => onDragLayoutStart(element)}
          >
            <EditorSideBarElementLayout element={element} />
          </div>
        ))}
      </div>
      <h2 className="font-bold text-lg">Components</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {elementsComponents.map((element, key) => (
          <div
            key={key}
            draggable
            onDragStart={() => onDragComponentStart(element)}
          >
            <EditorSideBarElementComponent element={element} />
          </div>
        ))}
      </div>
    </div>
  );
};
