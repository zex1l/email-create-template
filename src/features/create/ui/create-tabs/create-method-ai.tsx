import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';

type Props = {
  textArea: {
    value: string;
    onChange: (value: string) => void;
  };
  button: {
    onClick: () => void;
    disabled: boolean;
  };
};

export const CreateMethodAi = ({ button, textArea }: Props) => {
  return (
    <div>
      <label className="mb-2 text-gray-600">
        Provide deteils about the email template you want to create
      </label>
      <Textarea
        rows={5}
        placeholder="Write your description here"
        className="mb-2"
        onChange={(e) => textArea.onChange(e.target.value)}
        value={textArea.value}
      />
      <Button
        disabled={button.disabled}
        onClick={button.onClick}
        className="w-full"
      >
        Generate
      </Button>
    </div>
  );
};
