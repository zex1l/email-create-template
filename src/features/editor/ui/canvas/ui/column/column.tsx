import { DragEvent as ReactDragEvent } from 'react';
import {
  DragLayoutType,
  DragOverState,
} from '@/features/editor/hooks/use-drag-and-drop-canvas';
import { ItemCanvas } from '../ItemCanvas';
import { useSelectedElement } from '../../../settings/settings-context';
import { useEmailTemplate } from '@/shared/store/email-template.store';
import { ArrowDown, ArrowUp, TrashIcon } from 'lucide-react';

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
  const {
    selectedElement,
    setSelectedElement,
    deleteLayoutElement,
    moveLayoutElement,
  } = useEmailTemplate();

  return (
    <div className="relative">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${element.numberOfColumn}, 1fr)`,
          gap: 0,
        }}
        className={`border border-dashed border-white ${selectedElement.element?.id === element.id && ' border-purple-400!'} `}
      >
        {Array.from({ length: element.numberOfColumn }).map((_, index) => (
          <div
            key={index}
            className={`${!element[index] ? 'p-2' : ''} flex items-center justify-center cursor-pointer border text-gray-400 border-white ${!element[index] ? 'bg-gray-100  border-gray-200 ' : ''} ${index === dragOver?.index && dragOver?.columnId === element.id ? 'bg-primary! text-white!' : ''} ${selectedElement.element?.id === element.id && selectedElement?.index === index ? 'border border-primary!' : ''}`}
            onDragOver={(e) => onDragOverToElement(e, element, index)}
            onDrop={() => onDropToElement(element)}
            onClick={() =>
              setSelectedElement({
                element,
                index,
              })
            }
          >
            {ItemCanvas(element[index]) ?? (
              <span className="">Drag element here</span>
            )}
          </div>
        ))}
        {selectedElement.element?.id === element.id && (
          <>
            <div
              onClick={() => deleteLayoutElement(element.id)}
              className=" absolute -right-18 top-0 p-2 bg-gray-200 rounded-full cursor-pointer hover:scale-105 transition-all hover:shadow-md"
            >
              <TrashIcon className="w-4 h-4 text-red-600" />
            </div>
            <div
              onClick={() => moveLayoutElement(element.id, 'up')}
              className=" absolute -right-18 top-8 p-2 bg-gray-200 rounded-full cursor-pointer hover:scale-105 transition-all hover:shadow-md"
            >
              <ArrowUp className="w-4 h-4 " />
            </div>
            <div
              onClick={() => moveLayoutElement(element.id, 'down')}
              className=" absolute -right-18 top-16 p-2 bg-gray-200 rounded-full cursor-pointer hover:scale-105 transition-all hover:shadow-md"
            >
              <ArrowDown className="w-4 h-4 " />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
