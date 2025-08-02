import { DragEvent as ReactDragEvent } from 'react';
import {
  DragLayoutType,
  DragOverState,
} from '@/features/editor/hooks/useDragAndDropCanvas';
import { ItemCanvas } from '../ItemCanvas';
import { useSelectedElement } from '../../../settings/settings-context';
import { useEmailTemplate } from '@/shared/store/email-template.store';

type Props = {
  element: DragLayoutType;
  onDropToElement: (element: DragLayoutType) => void;
  onDragOverToElement: (
    e: ReactDragEvent<HTMLDivElement>,
    element: DragLayoutType,
    index: number
  ) => void;
  dragOver: DragOverState;
};

export const Column = ({
  element,
  onDragOverToElement,
  onDropToElement,
  dragOver,
}: Props) => {
  const { selectedElement, setSelectedElement } = useEmailTemplate();

  return (
    <div className="">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${element.numberOfColumn}, 1fr)`,
          gap: 0,
        }}
      >
        {Array.from({ length: element.numberOfColumn }).map((_, index) => (
          <div
            key={index}
            className={`  ${!element[index] && 'p-2'} flex items-center justify-center cursor-pointer border border-white
              ${!element[index] && 'bg-gray-100  border-gray-200 '} 
              ${index === dragOver?.index && dragOver?.columnId === element.id && 'bg-primary! text-white'}
              ${selectedElement?.element && selectedElement?.element?.id === element.id && selectedElement?.index === index && 'border border-primary!'}
            `}
            onDragOver={(e) => onDragOverToElement(e, element, index)}
            onDrop={() => onDropToElement(element)}
            onClick={() =>
              setSelectedElement({
                element,
                index,
              })
            }
          >
            {ItemCanvas(element[index]) ?? 'Drag element here'}
          </div>
        ))}
      </div>
    </div>
  );
};
