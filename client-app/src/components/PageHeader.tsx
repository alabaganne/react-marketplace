import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const PageHeader = (props: Props) => {
  return (
    <div className="mb-8 flex items-center gap-8">
      <h1 className="text-6xl font-special">{props.title}</h1>
      <div className="text-gray-400">|</div>
      <p className="text-sm text-indigo-500 font-medium">{props.subtitle}</p>
    </div>
  );
};

export default PageHeader;
