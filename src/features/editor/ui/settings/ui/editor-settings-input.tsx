import { Input } from '@/shared/ui/input';
import { ChangeEvent } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export const EditorSettingsInput = ({ label, onChange, value }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <Input value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
};
