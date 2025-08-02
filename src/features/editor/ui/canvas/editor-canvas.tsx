import { ScreenType } from '../../hooks/useScreenSize';
import { DragEvent as ReactDragEvent, useState } from 'react';
import { EditorCanvasElement } from './editor-canvas-element';
import {
  CanvasItemsType,
  DragLayoutType,
  DragOverState,
} from '../../hooks/useDragAndDropCanvas';

type CanvasProps = {
  screenSize: ScreenType;
  canvasElements: CanvasItemsType[];
  onDropHandle: () => void;
  onDragOver: (e: ReactDragEvent<HTMLDivElement>) => void;
  onDropToElement: (element: DragLayoutType) => void;
  onDragOverToElement: (
    e: ReactDragEvent<HTMLDivElement>,
    element: DragLayoutType,
    index: number
  ) => void;
  dragOverElement: DragOverState;
  dragOver: boolean;
};

const EditorCanvas = ({
  screenSize,
  canvasElements,
  onDragOver,
  onDropHandle,
  dragOver,
  onDragOverToElement,
  onDropToElement,
  dragOverElement
}: CanvasProps) => {
  const hasElements = canvasElements.length > 0;

  return (
    <div className="flex justify-center pt-20">
      <div
        className={`bg-white p-6 w-full border-dashed border-2 border-white  ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-lg'} ${dragOver && 'bg-purple-200! border-primary!'}`}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDropHandle()}
      >
        {!hasElements && (
          <div className="text-center">Drop Elenements Here</div>
        )}
        {hasElements &&
          canvasElements.map((element, key) => (
            <EditorCanvasElement
              dragOver={dragOverElement}
              key={key}
              element={element}
              onDragOverToElement={onDragOverToElement}
              onDropToElement={onDropToElement}
            />
          ))}
      </div>
    </div>
  );
};

export default EditorCanvas;
