import {
  DragLayoutType,
  DragOverState,
} from '../../hooks/useDragAndDropCanvas';
import { Column } from './ui/column/column';
import { DragEvent as ReactDragEvent } from 'react';
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

export const EditorCanvasElement = ({
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
