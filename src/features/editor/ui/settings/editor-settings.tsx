import { useEmailTemplate } from '@/shared/store/email-template.store';
import { throttle } from 'lodash';
import { CSSProperties, forwardRef } from 'react';
import { SidebarElementComponent } from '../../data/component.data';
import { SettingsButtonController } from './ui/setting-controller-field/settings-button-controller';
import { SettingTextController } from './ui/setting-controller-field/settings-text-controller';
import { SettingsImageField } from './ui/setting-controller-field/settings-image-controller';

const EditorSettings = forwardRef<HTMLDivElement>((_, ref) => {
  const { selectedComponent, onChangeSelectedItem, onChangeStyleSelectedItem } =
    useEmailTemplate();

  const trottledOnChangeStyle = throttle(onChangeStyleSelectedItem, 1000);

  return (
    <div ref={ref} className="p-5 flex flex-col gap-5">
      <h2 className="font-bold text-lg">Settings</h2>
      {selectedComponent ? (
        <SelectedItemController
          onChangeSelectedItem={onChangeSelectedItem}
          selectedComponent={selectedComponent}
          trottledOnChangeStyle={trottledOnChangeStyle}
        />
      ) : (
        <div className="text-center text-zinc-600">No selected component</div>
      )}
    </div>
  );
});

export default EditorSettings;

const SelectedItemController = (props: PropsField) => {
  const { selectedComponent } = props;

  switch (selectedComponent?.type) {
    case 'button':
      return <SettingsButtonController {...props} />;
    case 'text':
      return <SettingTextController {...props} />;
    case 'image':
      return <SettingsImageField {...props} />;
  }
};

export type PropsField = {
  onChangeSelectedItem: (field: string, value: string) => void;
  selectedComponent: SidebarElementComponent | null;
  trottledOnChangeStyle: (field: keyof CSSProperties, value: string) => void;
};
