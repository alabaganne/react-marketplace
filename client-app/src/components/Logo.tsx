import React from 'react';

interface Props {
  className?: string;
}

const Logo = ({ className = '' }: Props) => {
  return (
    // <div className='font-semibold text-2xl text-indigo-400'>Marketplace</div>
    <div className={'font-special ' + className}>المرشي</div>
  );
};

export default Logo;
