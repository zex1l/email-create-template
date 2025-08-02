import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { AlignLeft } from 'lucide-react';

type OptionsType = {
  value: string;
  content: {
    text?: string;
    icon?: typeof AlignLeft;
  };
};

type Props = {
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  options: OptionsType[];
};

export const EditorSettingsTabs = ({
  label,
  onChange,
  value,
  options,
}: Props) => {
  console.log(value);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-md text-zinc-600">{label}</label>
      <Tabs defaultValue={value} onValueChange={(e) => onChange(e)}>
        <TabsList>
          {options.map((option) => (
            <TabsTrigger key={option.value} value={option.value}>
              {option.content.icon ? (
                <option.content.icon />
              ) : (
                option.content.text
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
