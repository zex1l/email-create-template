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
import Link from 'next/link';
import { useGetBoards } from './hooks/use-get-boards';
import { BoardsListItem } from './ui/boards-list-item';
import { formateTimestampToDate } from '@/shared/utils/formaters';

const Boards = () => {
  const [mode, setMode] = useState<ModeView>('list');
  const { emailTemplates } = useGetBoards();

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
                <Link href={'/boards/create'}>
                  <Button>
                    Create template <PlusIcon />
                  </Button>
                </Link>
                <BoardsToggleView onChange={setMode} value={mode} />
              </>
            }
          />
        }
        list={
          <BoardsListLayout
            mode={mode}
            list={
              emailTemplates &&
              emailTemplates.map((template, index) => (
                <BoardsListItem
                  view={mode}
                  key={index}
                  date={formateTimestampToDate(template._creationTime)}
                  {...template}
                />
              ))
            }
          />
        }
      />
    </div>
  );
};

export default Boards;

type Props = {
  titel?: React.ReactNode;
  actions?: React.ReactNode;
};
