// import {
//   SelectedElementType,
//   selectedItemSettings,
//   setSelectedItem,
// } from '@/shared/store/slices/canvas-settings.slice';
// import { useAppDispatch, useAppSelector } from '@/shared/store/store';

// import { useState } from 'react';
// import { ComponentTypeInLayout } from '../data/layout.data';
// import { ComponentFieldType } from '../data/component.data';

// export const useSettingsElement = () => {
//   const dispatch = useAppDispatch();
//   const selectedElement = useAppSelector(selectedItemSettings);

//   const component = selectedElement.element[selectedElement.index];

//   const [selectedElementComponent, setSelectedElementComponent] =
//     useState<ComponentTypeInLayout>(component);

//   const onChangeSelectedItem = ({
//     element,
//     index,
//   }: {
//     element: SelectedElementType;
//     index: number;
//   }) => {
//     dispatch(setSelectedItem({ selectedItem: { element, index } }));
//     setSelectedElementComponent(element[index]);
//   };



//   return {
//     selectedElement,
//     onChangeSelectedItem,
//     // onChangeSelectedItemField,
//   };
// };
