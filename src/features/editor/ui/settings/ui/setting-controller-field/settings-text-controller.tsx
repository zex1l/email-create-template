import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';
import { PropsField } from '../../editor-settings';
import { EditorSettingsColorPicker } from '../field/editor-settings-color-picker';
import { EditorSettingsInput } from '../field/editor-settings-input';
import { EditorSettingsTabs } from '../field/editor-settings-select';

export const SettingTextController = ({
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

      <EditorSettingsColorPicker
        label="Background Color"
        onChange={(value) => trottledOnChangeStyle('backgroundColor', value)}
        value={selectedComponent?.style.backgroundColor || ''}
      />

      <EditorSettingsColorPicker
        label="Text Color"
        onChange={(value) => trottledOnChangeStyle('color', value)}
        value={selectedComponent?.style.color || ''}
      />

      <EditorSettingsInput
        label="Font Size"
        onChange={(value) => trottledOnChangeStyle('fontSize', value)}
        value={selectedComponent?.style.fontSize || ''}
      />
      <EditorSettingsTabs
        label="Text position"
        value={selectedComponent?.style?.textAlign}
        onChange={(value) => trottledOnChangeStyle('textAlign', value)}
        options={[
          { value: 'left', content: { icon: AlignLeft } },
          { value: 'center', content: { icon: AlignCenter } },
          { value: 'right', content: { icon: AlignRight } },
        ]}
      />
    </>
  );
};
