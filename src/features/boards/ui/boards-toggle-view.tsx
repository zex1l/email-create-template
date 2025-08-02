import { ListIcon, ImagesIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '../../../shared/ui/tabs';
import { ModeView } from './boards-layout';

type Props = {
  value: ModeView;
  onChange: (value: ModeView) => void;
};

export const BoardsToggleView = ({ onChange, value }: Props) => {
  return (
    <Tabs defaultValue={value} onValueChange={(e) => onChange(e as ModeView)}>
      <TabsList>
        <TabsTrigger value="list">
          <ListIcon />
        </TabsTrigger>
        <TabsTrigger value="grid">
          <ImagesIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
