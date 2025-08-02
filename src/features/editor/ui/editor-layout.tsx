import React from 'react';

const EditorLayout = ({ canvas, settings, sidebar }: Props) => {
  return (
    <div className="grid grid-cols-5 h-full">
      {sidebar}
      <div className="col-span-3 bg-gray-100 my-5">{canvas}</div>
      {settings}
    </div>
  );
};

export default EditorLayout;

type Props = {
  sidebar?: React.ReactNode;
  canvas?: React.ReactNode;
  settings?: React.ReactNode;
};
