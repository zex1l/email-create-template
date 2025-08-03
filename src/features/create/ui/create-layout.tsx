import React from 'react';

type CreateLayoutProps = {
  header?: React.ReactNode;
  content?: React.ReactNode;
};
export const CreateLayout = ({ header, content }: CreateLayoutProps) => {
  return (
    <div className="max-w-[600px] mx-auto">
      {header && <div className="mb-5">{header}</div>}
      {content && <div>{content}</div>}
    </div>
  );
};
