import { Button } from '@/shared/ui/button';
import { Code, Monitor, Smartphone } from 'lucide-react';
import { ScreenType } from '../hooks/use-screen-size';

export const EditorHeader = ({
  title,
  screenSize,
  onChageScreenSize,
  onOpenModal,
  buttonSave: { onSaveTemplate, loadingUpdate },
}: Props) => {
  return (
    <div className="flex flex-col  justify-between gap-6 lg:flex-row lg:items-center">
      <div className="lg:max-w-[300px]">{title}</div>
      <div className="flex gap-3 items-center ">
        <Button
          variant={'secondary'}
          onClick={() => onChageScreenSize('desktop')}
          className={`cursor-pointer  hover:text-primary hover:bg-purple-200 ${screenSize === 'desktop' && 'bg-purple-200 border-primary text-purple-800  '} `}
        >
          <Monitor />
          Desktop
        </Button>
        <Button
          variant={'secondary'}
          onClick={() => onChageScreenSize('mobile')}
          className={`cursor-pointer hover:text-primary hover:bg-purple-200 ${screenSize === 'mobile' && 'bg-purple-200 border-primary text-purple-800  '} `}
        >
          <Smartphone />
          Mobile
        </Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button onClick={onOpenModal} variant={'secondary'}>
          <Code />
        </Button>
        <Button variant={'outline'}>Send Test Email</Button>
        <Button disabled={loadingUpdate} onClick={onSaveTemplate}>
          Save Templates
        </Button>
      </div>
    </div>
  );
};

type Props = {
  title: React.ReactNode;
  screenSize: ScreenType;
  onChageScreenSize: (screenSize: ScreenType) => void;
  onOpenModal: () => void;
  buttonSave: {
    onSaveTemplate: () => void;
    loadingUpdate: boolean;
  };
};
