import { SidebarElementComponent } from '@/features/editor/data/component.data';
import {
  CanvasItemsType,
  DragComponentType,
  DragLayoutType,
} from '@/features/editor/hooks/use-drag-and-drop-canvas';
import { CSSProperties } from 'react';
import { create } from 'zustand';

type SelectedElementType = {
  element: DragLayoutType | null;
  index: number;
};

type EmailTemplateStore = {
  emailTemplate: CanvasItemsType[];
  selectedElement: SelectedElementType;
  selectedComponent: SidebarElementComponent | null;

  setEmailTemplate: (emailTemplate: CanvasItemsType) => void;
  setFullEmailTemplate: (emailTemplate: CanvasItemsType[]) => void;
  setComponentToLayout: (
    component: DragComponentType,
    columnIndex: number,
    columnId: number
  ) => void;

  deleteLayoutElement: (elementId: number) => void;
  moveLayoutElement: (elementId: number, action: 'up' | 'down') => void;

  setSelectedElement: (element: SelectedElementType) => void;
  resetSelectedElement: () => void;

  onChangeSelectedItem: (field: string, value: string) => void;
  onChangeStyleSelectedItem: (
    field: keyof CSSProperties,
    value: string
  ) => void;
};

export const useEmailTemplate = create<EmailTemplateStore>((set, get) => ({
  emailTemplate: [],
  selectedElement: { element: null, index: 0 },
  selectedComponent: null,

  setEmailTemplate: (emailTemplate: CanvasItemsType) =>
    set((state) => ({
      emailTemplate: [...state.emailTemplate, emailTemplate],
    })),

  setFullEmailTemplate: (emailTemplate: CanvasItemsType[]) =>
    set((state) => ({
      emailTemplate: emailTemplate,
    })),

  setComponentToLayout: (
    component: DragComponentType,
    columnIndex: number,
    columnId: number
  ) => {
    set((state) => ({
      emailTemplate: state.emailTemplate.map((item) =>
        columnId === item.id
          ? {
              ...item,
              [columnIndex]: component,
            }
          : item
      ),
    }));
  },

  deleteLayoutElement: (elementId) => {
    set((state) => ({
      emailTemplate: state.emailTemplate.filter(
        (item) => item.id !== elementId
      ),
    }));
  },

  moveLayoutElement: (elementId, action) => {
    const emailTemplateCopy = get().emailTemplate;

    const indexElement = emailTemplateCopy.findIndex(
      (item) => item.id === elementId
    );

    if (
      emailTemplateCopy.length < 2 ||
      indexElement === -1 ||
      (indexElement === 0 && action === 'up') ||
      (indexElement === emailTemplateCopy.length - 1 && action === 'down')
    )
      return;

    if (action === 'up') {
      [
        ([
          emailTemplateCopy[indexElement],
          emailTemplateCopy[indexElement - 1],
        ] = [
          emailTemplateCopy[indexElement - 1],
          emailTemplateCopy[indexElement],
        ]),
      ];
    } else {
      [
        ([
          emailTemplateCopy[indexElement],
          emailTemplateCopy[indexElement + 1],
        ] = [
          emailTemplateCopy[indexElement + 1],
          emailTemplateCopy[indexElement],
        ]),
      ];
    }

    set(() => ({
      emailTemplate: emailTemplateCopy,
    }));
  },

  setSelectedElement: (element: SelectedElementType) => {
    set(() => {
      return {
        selectedElement: element,
        selectedComponent: element.element?.[element.index],
      };
    });
  },

  resetSelectedElement: () =>
    set(() => ({
      selectedElement: { element: null, index: 0 },
      selectedComponent: null,
    })),
  onChangeSelectedItem: (field: string, value: string) => {
    const currentSelectedElement = get().selectedElement;
    const emailTemplate = get().emailTemplate;

    // Проверки
    if (!currentSelectedElement?.element) {
      console.warn('No element selected');
      return;
    }

    const currentElement =
      currentSelectedElement.element[currentSelectedElement.index];
    if (!currentElement) {
      console.warn('Current element not found');
      return;
    }

    const updatedLayoutElement = {
      ...currentSelectedElement.element,
      [currentSelectedElement.index]: {
        ...currentElement,
        [field]: value,
      },
    };

    set({
      selectedElement: {
        ...currentSelectedElement,
        element: updatedLayoutElement,
      },

      selectedComponent: updatedLayoutElement[currentSelectedElement.index],
      emailTemplate: emailTemplate.map((item) => {
        if (item.id === currentSelectedElement.element?.id) {
          return {
            ...item,
            [currentSelectedElement.index]:
              updatedLayoutElement[currentSelectedElement.index],
          };
        }
        return item;
      }),
    });
  },
  onChangeStyleSelectedItem: (field, value) => {
    const currentSelectedElement = get().selectedElement;
    const emailTemplate = get().emailTemplate;

    if (!currentSelectedElement?.element) {
      console.warn('No element selected for style change');
      return;
    }

    const currentElement =
      currentSelectedElement.element[currentSelectedElement.index];
    if (!currentElement) {
      console.warn('Current element not found for style change');
      return;
    }

    const updatedLayoutElement = {
      ...currentSelectedElement.element,
      [currentSelectedElement.index]: {
        ...currentElement,
        style: {
          ...(currentElement.style || {}),
          [field]: value,
        },
      },
    };

    set({
      selectedElement: {
        ...currentSelectedElement,
        element: updatedLayoutElement,
      },
      selectedComponent: updatedLayoutElement[currentSelectedElement.index],
      emailTemplate: emailTemplate.map((item) => {
        if (item.id === currentSelectedElement.element?.id) {
          return {
            ...item,
            [currentSelectedElement.index]:
              updatedLayoutElement[currentSelectedElement.index],
          };
        }
        return item;
      }),
    });
  },
}));
