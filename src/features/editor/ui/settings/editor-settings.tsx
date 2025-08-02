import { useEffect, useState } from 'react';
import { EditorSettingsInput } from './ui/editor-settings-input';
import {
  ComponentFieldType,
  SidebarElementComponent,
} from '../../data/component.data';
import { useSelectedElement } from './settings-context';
import { DragLayoutType } from '../../hooks/useDragAndDropCanvas';

const EditorSettings = () => {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  console.log(selectedElement);
  const [element, setElement] = useState<SidebarElementComponent>();

  useEffect(() => {
    if (selectedElement.element && selectedElement.index !== null) {
      setElement(selectedElement.element[selectedElement.index]);
    }
  }, [selectedElement]);

  const onChangeSelectedItem = (field: ComponentFieldType, value: string) => {
    if (!selectedElement.element || selectedElement.index === null) return;

    // Глубокое копирование
    const updateElement = { ...selectedElement };
    const element = selectedElement.element[selectedElement.index];
    //@ts-ignore
    element[field] = value;
    selectedElement.element[selectedElement.index] = element;
    setSelectedElement(updateElement);
  };

  // TODO Разобраться как это сделать правильно в onChangeSelectedItem

  return (
    <div className="p-5">
      <h2 className="font-bold text-lg">Settings</h2>
      {element && (
        <EditorSettingsInput
          label="Content"
          onChange={(value) => onChangeSelectedItem('content', value)}
          value={element?.content}
        />
      )}
    </div>
  );
};

export default EditorSettings;
