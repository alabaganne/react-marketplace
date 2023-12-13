import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="text-center text-sm font-medium px-6 py-4 flex items-center">
      <div className="flex items-center gap-2 justify-center w-full">
        <span>&copy; 2023</span> <Logo className="text-2xl text-indigo-600" />{' '}
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
