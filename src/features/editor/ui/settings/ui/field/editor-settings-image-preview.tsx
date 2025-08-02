import { Input } from '@/shared/ui/input';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export const EditorSettingsImagePreview = ({
  label,
  onChange,
  value,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-md text-zinc-600">{label}</label>
      <img
        className="w-full h-[150px] object-cover border border-zinc-300 rounded-md"
        src={value}
        alt="image"
      />
      <Input value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
};
