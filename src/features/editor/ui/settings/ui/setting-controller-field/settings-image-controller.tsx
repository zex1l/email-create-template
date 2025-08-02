import { PropsField } from '../../editor-settings';
import { EditorSettingsImagePreview } from '../field/editor-settings-image-preview';
import { EditorSettingsInput } from '../field/editor-settings-input';
import { EditorSettingsSlider } from '../field/editor-settings-slider';

export const SettingsImageField = ({
  onChangeSelectedItem,
  selectedComponent,
  trottledOnChangeStyle,
}: PropsField) => {
  return (
    <>
      <EditorSettingsImagePreview
        label="Preview"
        onChange={(value) => onChangeSelectedItem('imageUrl', value)}
        value={selectedComponent?.imageUrl || ''}
      />
      <EditorSettingsInput
        label="Url"
        onChange={(value) => onChangeSelectedItem('url', value)}
        value={selectedComponent?.url || ''}
      />
      <EditorSettingsSlider
        label="Width"
        onChange={(value) => trottledOnChangeStyle('width', value)}
        value={selectedComponent?.style.width || ''}
      />
    </>
  );
};
