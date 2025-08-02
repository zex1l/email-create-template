'use client';
import { sidebarElementsComponent } from './data/component.data';
import { sidebarElementsLayout } from './data/layout.data';
import { useScreenSize } from './hooks/useScreenSize';
import EditorCanvas from './ui/canvas/editor-canvas';
import { EditorHeader } from './ui/editor-header';
import EditorLayout from './ui/editor-layout';
import EditorSettings from './ui/settings/editor-settings';
import { EditorSideBarElements } from './ui/sidebar/editor-sidebar-elements';
import { useDragAndDropCanvas } from './hooks/useDragAndDropCanvas';
import { useEmailTemplate } from '@/shared/store/email-template.store';
import { useClickOutside } from './hooks/useClickOutside';

const Editor = () => {
  const { screen, setScreen } = useScreenSize();
  const { dragComponent, dragLayout } = useDragAndDropCanvas();
  const { emailTemplate } = useEmailTemplate();
  const { wrapperRef } = useClickOutside();

  return (
    <div className="px-5 my-10 flex flex-col gap-5 h-[85%]">
      <EditorHeader
        onChageScreenSize={setScreen}
        title={
          <h2 className="text-2xl font-semibold text-primary">
            Editor Email Template
          </h2>
        }
        screenSize={screen}
      />
      <EditorLayout
        sidebar={
          <EditorSideBarElements
            onDragComponentStart={dragComponent.onDragComponentStart}
            onDragLayoutStart={dragLayout.onDragLayoutStart}
            elementsLayout={sidebarElementsLayout}
            elementsComponents={sidebarElementsComponent}
          />
        }
        canvas={
          <EditorCanvas
            screenSize={screen}
            canvasElements={emailTemplate}
            onDragOver={dragLayout.onDragOverLayoutToCanvas}
            onDropHandle={dragLayout.onDropHandleLayoutToCanvas}
            dragOver={dragLayout.dragOverCanvas}
            onDragOverToElement={dragComponent.onDragOverComponentToLayout}
            onDropToElement={dragComponent.onDropComponentToLayout}
            dragOverElement={dragComponent.dragOverLayoutElement}
            ref={wrapperRef}
          />
        }
        settings={<EditorSettings ref={wrapperRef} />}
      />
    </div>
  );
};

export default Editor;
