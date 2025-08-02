import { EditorSettingsInput } from '../field/editor-settings-input';
import { EditorSettingsColorPicker } from '../field/editor-settings-color-picker';
import { PropsField } from '../../editor-settings';

export const SettingsButtonController = ({
  onChangeSelectedItem,
  selectedComponent,
  trottledOnChangeStyle,
}: PropsField) => {
  return (
    <>
      <EditorSettingsInput
        label="Content"
        onChange={(value) => onChangeSelectedItem('content', value)}
        value={selectedComponent?.content || ''}
      />

      <EditorSettingsInput
        label="Url"
        onChange={(value) => onChangeSelectedItem('url', value)}
        value={selectedComponent?.url || ''}
      />

      <EditorSettingsColorPicker
        label="Background Color"
        onChange={(value) => trottledOnChangeStyle('backgroundColor', value)}
        value={selectedComponent?.style.backgroundColor || ''}
      />

      <EditorSettingsColorPicker
        label="Text Color"
        onChange={(value) => trottledOnChangeStyle('color', value)}
        value={selectedComponent?.style.backgroundColor || ''}
      />

      <EditorSettingsInput
        label="Font Size"
        onChange={(value) => trottledOnChangeStyle('fontSize', value)}
        value={selectedComponent?.style.fontSize || ''}
      />
    </>
  );
};
