export type ModeView = 'grid' | 'list';

export const BoardsLayout = ({
  header,
  list,
}: {
  list?: React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-6">
      {header}
      {list}
    </div>
  );
};

export const BoardsLyoutHeader = ({
  actions,
  title,
}: {
  title?: React.ReactNode;
  actions?: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between">
      {title}
      <div className="flex items-center gap-2">{actions}</div>
    </div>
  );
};

export const BoardsListLayout = ({ mode, list }: { mode: ModeView, list?: React.ReactNode }) => {
  switch (mode) {
    case 'grid':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {list}
        </div>
      );
    case 'list':
      return <div className="flex flex-col gap-4">{list}</div>;
  }
};
