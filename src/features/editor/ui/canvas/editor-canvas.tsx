import { ScreenType } from '../../hooks/use-screen-size';
import {
  forwardRef,
  DragEvent as ReactDragEvent,
  RefObject,
  useState,
} from 'react';
import {
  CanvasItemsType,
  DragLayoutType,
  DragOverState,
} from '../../hooks/use-drag-and-drop-canvas';
import { Column } from './ui/column/column';

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
  refHtmlBlock: RefObject<HTMLDivElement | null>;
};

type EditorCanvasElementProps = {
  element: any;
  onDropToElement: (element: DragLayoutType) => void;
  onDragOverToElement: (
    e: ReactDragEvent<HTMLDivElement>,
    element: DragLayoutType,
    index: number
  ) => void;
  dragOver: DragOverState;
};

const EditorCanvas = forwardRef<HTMLDivElement, CanvasProps>(
  (
    {
      screenSize,
      canvasElements,
      onDragOver,
      onDropHandle,
      dragOver,
      onDragOverToElement,
      onDropToElement,
      dragOverElement,
      refHtmlBlock,
    },
    ref
  ) => {
    const hasElements = canvasElements.length > 0;

    return (
      <div ref={ref} className="flex justify-center py-10">
        <div
          className={`bg-white p-6 w-full border-dashed border-2 border-white  ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-lg'} ${dragOver && 'bg-purple-200! border-primary!'}`}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDropHandle()}
          ref={refHtmlBlock}
        >
          {!hasElements && (
            <div className="text-center text-gray-400">
              Drop Elenements Here
            </div>
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
  }
);

const EditorCanvasElement = ({
  element,
  onDragOverToElement,
  onDropToElement,
  dragOver,
}: EditorCanvasElementProps) => {
  switch (element.type) {
    case 'column':
      return (
        <Column
          onDropToElement={onDropToElement}
          onDragOverToElement={onDragOverToElement}
          element={element}
          dragOver={dragOver}
        />
      );
  }
};

export default EditorCanvas;
