import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Card = ({ className = '', children, title, subtitle }: Props) => {
  return (
    <div
      className={
        'bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden ' +
        className
      }
    >
      {title && (
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-special text-3xl text-indigo-600">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-500 font-medium">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
