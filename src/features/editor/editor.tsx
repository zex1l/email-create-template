'use client';
import { sidebarElementsComponent } from './data/component.data';
import { sidebarElementsLayout } from './data/layout.data';
import { useScreenSize } from './hooks/useScreenSize';
import EditorCanvas from './ui/canvas/editor-canvas';
import { EditorHeader } from './ui/editor-header';
import EditorLayout from './ui/editor-layout';
import EditorSettings from './ui/settings/editor-settings';
import { EditorSideBarElements } from './ui/sidebar/editor-sidebar-elements';
import {
  DragLayoutType,
  useDragAndDropCanvas,
} from './hooks/useDragAndDropCanvas';
import { useState } from 'react';
import { SettingsContext } from './ui/settings/settings-context';

const Editor = () => {
  const { screen, setScreen } = useScreenSize();
  const { dragComponent, dragLayout, emailTemplate } = useDragAndDropCanvas();
  const [selectedElement, setSelectedElement] = useState<{
    element: DragLayoutType | null;
    index: number;
  }>({
    element: null,
    index: 0,
  });

  return (
    <SettingsContext.Provider value={{ selectedElement, setSelectedElement }}>
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
            />
          }
          settings={<EditorSettings />}
        />
      </div>
    </SettingsContext.Provider>
  );
};

export default Editor;
