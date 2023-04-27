'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@mui/material';
import {
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const navbarItems = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
  {
    text: 'Apps',
    to: '/apps',
  },
  {
    text: 'Resume',
    to: '/resume',
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(!open);
  const onCloseHandler = () => setOpen(false);

  const mappedItems = navbarItems.map(({ to, text }) => (
    <Link key={text} href={to}>
      <div
        className="text-white no-underline h-full hover:bg-slate-300"
        onClick={onCloseHandler}
      >
        {text}
      </div>
    </Link>
  ));

  const mappedItemsMobile = navbarItems.map(({ to, text }) => (
    <Link key={text} href={to}>
      <div className="text-white no-underline" onClick={onCloseHandler}>
        {text}
      </div>
    </Link>
  ));

  return (
    <>
      <nav className="flex content-between items-center p-4 bg-slate-900 text-white">
        <div className="flex items-center no-underline h-full">
          <Link href="/" passHref>
            <a className="text-white mr-4" onClick={onCloseHandler}>
              <HomeIcon className="w-5 h-5 " />
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex space-x-2">{mappedItems}</div>

          <Link href="/todo" passHref>
            <a className="personIcon" onClick={onCloseHandler}>
              <UserIcon className="navbarIcon" />
            </a>
          </Link>
        </div>

        <div className="md:hidden">
          <div className="cursor-pointer" onClick={onOpenHandler}>
            {open ? (
              <XMarkIcon className="text-white w-5 h-5" />
            ) : (
              <Bars3Icon className="text-white w-5 h-5" />
            )}
          </div>
          <Dialog
            open={open}
            fullScreen
            fullWidth
            PaperProps={{
              sx: {
                boxShadow: 'none',
                backgroundColor: '#242222',
              },
            }}
            className="navMenuActive"
          >
            <div className="flex flex-col gap-2 py-5">{mappedItemsMobile}</div>
          </Dialog>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
