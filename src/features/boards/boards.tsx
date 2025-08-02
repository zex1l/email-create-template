'use client';
import { useState } from 'react';
import {
  BoardsLayout,
  BoardsListLayout,
  BoardsLyoutHeader,
  ModeView,
} from './ui/boards-layout';
import { Button } from '@/shared/ui/button';
import { PlusIcon } from 'lucide-react';
import { BoardsToggleView } from './ui/boards-toggle-view';

const Boards = () => {
  const [mode, setMode] = useState<ModeView>('list');

  return (
    <div className="h-full">
      <BoardsLayout
        header={
          <BoardsLyoutHeader
            title={
              <h2 className="text-2xl font-semibold text-primary">Boards</h2>
            }
            actions={
              <>
                <Button>
                  Create template <PlusIcon />
                </Button>
                <BoardsToggleView onChange={setMode} value={mode} />
              </>
            }
          />
        }
        list={<BoardsListLayout mode={mode} />}
      />
    </div>
  );
};

export default Boards;

type Props = {
  titel?: React.ReactNode;
  actions?: React.ReactNode;
};
