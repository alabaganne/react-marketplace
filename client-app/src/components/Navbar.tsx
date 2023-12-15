import { Dialog } from '@headlessui/react';
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', active: true },
  { name: 'Shops', href: '/shops' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 container"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <Logo className="text-3xl" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={
                'text-sm text-gray-500 hover:text-gray-900 leading-6' +
                (item.active ? ' text-gray-900 font-medium ' : '')
              }
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-3">
            <Link
              to="/auth/login"
              className="text-sm font-medium leading-6 border border-transparent bg-black hover:bg-gray-700 px-4 py-2 rounded text-white flex-center"
            >
              <UserCircleIcon className="h-5 w-5 mr-1" />
              Login
            </Link>
            <Link
              to="/auth/register"
              className="text-sm font-medium leading-6 border px-4 py-2 rounded flex-center hover:bg-black hover:text-white hover:border-transparent"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">المرشي</span>
              <Logo className="text-3xl text-indigo-600" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
