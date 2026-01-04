'use client';

import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';

function MobileNavDrawer({ page = 'insights' }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background md:hidden">
      <Sidebar version="v3" visible={open} page={page} />
      <button
        onClick={() => setOpen(!open)}
        className="p-6 flex items-center w-full flex-row border-t border-t-[#EDEDEE] bg-white  text-xl font-normal gap-4"
      >
        <svg
          className="shrink-0"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 17C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H15ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H21ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H21Z"
            fill="#B3ADAE"
          />
        </svg>
        <span>Table of contents</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0 ml-auto"
        >
          <path
            d="M17.293 8.29289C17.6835 7.90237 18.3165 7.90237 18.707 8.29289C19.0976 8.68342 19.0976 9.31643 18.707 9.70696L12.707 15.707C12.3165 16.0975 11.6835 16.0975 11.293 15.707L5.29297 9.70696C4.90245 9.31643 4.90245 8.68342 5.29297 8.29289C5.68349 7.90237 6.31651 7.90237 6.70703 8.29289L12 13.5859L17.293 8.29289Z"
            fill="#B3ADAE"
          />
        </svg>
      </button>
    </div>
  );
}

export default MobileNavDrawer;
