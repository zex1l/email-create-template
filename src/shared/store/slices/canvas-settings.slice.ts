import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DragLayoutType } from '@/features/editor/hooks/useDragAndDropCanvas';

// export type SelectedElementType = Omit<DragLayoutType, 'icon'>
export type SelectedElementType = Omit<DragLayoutType, 'icon'> & { icon: null };

type CanvasSettingsState = {
  selectedItem: {
    element: SelectedElementType;
    index: number;
  };
};

const initialState: CanvasSettingsState = {
  selectedItem: {
    element: {} as SelectedElementType,
    index: 0,
  },
};

const canvasSettingsSlice = createSlice({
  name: 'canvasSettings',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<CanvasSettingsState>) => {
      state.selectedItem = action.payload.selectedItem;
    },
  },
});

export const selectedItemSettings = (state: RootState) =>
  state.canvasSettings.selectedItem;

export const { setSelectedItem } = canvasSettingsSlice.actions;

export default canvasSettingsSlice.reducer;
