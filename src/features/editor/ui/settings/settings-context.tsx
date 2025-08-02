import { createContext, useContext } from 'react';
import { DragLayoutType } from '../../hooks/useDragAndDropCanvas';
import { SidebarElementLayout } from '../../data/layout.data';

export type SettingsContextType = {
  selectedElement: {
    element: (SidebarElementLayout & { id: number }) | null;
    index: number;
  };
  setSelectedElement: (element: {
    element: (SidebarElementLayout & { id: number }) | null;
    index: number;
  }) => void;
};

export const SettingsContext = createContext<SettingsContextType>({
  selectedElement: { element: null, index: 0 },
  setSelectedElement: () => {},
});

export const useSelectedElement = () => useContext(SettingsContext);
