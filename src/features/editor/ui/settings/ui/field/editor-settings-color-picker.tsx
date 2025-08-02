import { Input } from '@/shared/ui/input';

type Props = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
};

export const EditorSettingsColorPicker = ({
  label,
  onChange,
  value,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-md text-zinc-600">{label}</label>
      <Input
        value={value}
        type="color"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
