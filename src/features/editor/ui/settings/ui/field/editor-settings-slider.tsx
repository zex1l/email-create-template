import { Slider } from '@/shared/ui/slider';
import { formateValue } from '@/shared/utils/formaters';

type Props = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
};

export const EditorSettingsSlider = ({ label, onChange, value }: Props) => {
  const { unit, formatedValue } = formateValue(value);
  return (
    <div className="flex flex-col gap-1">
      <label className="text-md text-zinc-600">{label}</label>
      <Slider
        defaultValue={[formatedValue]}
        onValueChange={(value) => onChange(`${value[0]}${unit}`)}
      />
    </div>
  );
};
