import { useState, DragEvent as ReactDragEvent } from 'react';
import { SidebarElementLayout } from '../data/layout.data';
import { SidebarElementComponent } from '../data/component.data';
import { generateId } from '@/shared/utils/generateId';
import { useEmailTemplate } from '@/shared/store/email-template.store';

export type DragLayoutType = SidebarElementLayout & { id: number };
export type DragComponentType = SidebarElementComponent & { id: number };
type CanvasLayoutType = {
  dragLayout: DragLayoutType | null;
  dragComponent: DragComponentType | null;
};

export type CanvasItemsType = DragLayoutType & DragComponentType;

export type DragOverState = {
  columnId: number;
  index: number;
} | null;

export const useDragAndDropCanvas = () => {
  const [layout, setLayout] = useState<CanvasLayoutType>({
    dragComponent: null,
    dragLayout: null,
  });
  const [dragOverCanvas, setDragOverCanvas] = useState(false);

  const { setEmailTemplate, setComponentToLayout } = useEmailTemplate();

  const [dragOverLayoutElement, setDragOverLayoutElement] =
    useState<DragOverState>(null);

  const onChangeLayout = (layout: SidebarElementLayout) => {
    setLayout({
      dragLayout: { ...layout, id: generateId() },
      dragComponent: null,
    });
  };

  const onChangeComponent = (component: SidebarElementComponent) => {
    setLayout({
      dragLayout: null,
      dragComponent: { ...component, id: generateId() },
    });
  };

  const onDragLayoutStart = (layout: SidebarElementLayout) => {
    onChangeLayout(layout);
  };

  const onDragComponentStart = (component: SidebarElementComponent) => {
    onChangeComponent(component);
  };

  // Events для Canvas
  const onDragOverLayoutToCanvas = (e: ReactDragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOverCanvas(true);
  };

  // Events для Canvas
  const onDropHandleLayoutToCanvas = () => {
    setDragOverCanvas(false);
    if (layout?.dragLayout) {
      setEmailTemplate(layout?.dragLayout as CanvasItemsType);
    }
  };

  // =================================================

  // Events для Layout элементов
  const onDragOverComponentToLayout = (
    e: ReactDragEvent<HTMLDivElement>,
    element: DragLayoutType,
    index: number
  ) => {
    e.preventDefault();

    setDragOverLayoutElement({
      index,
      columnId: element.id,
    });
  };

  // Events для Layout элементов
  const onDropComponentToLayout = (element: DragLayoutType) => {
    const columnIndex = dragOverLayoutElement?.index;
    const columnId = dragOverLayoutElement?.columnId;
    setComponentToLayout(
      layout.dragComponent as DragComponentType,
      columnIndex as number,
      columnId as number
    );
    setDragOverLayoutElement(null);
  };

  return {
    layout,
    onChangeLayout,
    onChangeComponent,

    dragLayout: {
      onDragLayoutStart,
      onDragOverLayoutToCanvas,
      onDropHandleLayoutToCanvas,
      dragOverCanvas,
    },
    dragComponent: {
      onDragComponentStart,
      onDropComponentToLayout,
      onDragOverComponentToLayout,
      dragOverLayoutElement,
    },
  };
};
