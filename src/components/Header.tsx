import React from "react";

export default function Header() {
  return (
    <header className="p-[20px] flex items-start justify-between">
      <div>
        <a
          href="/"
          className="bg-[#CDD6F4] test-[#1E1E2E] text-2xl px-4 py-2 transform hover:rotate-6 inline-block duration-150"
        >
          B.Vlad
        </a>
      </div>
      {/* <nav>
        <ul className='text-right transform rotate-6'>
          <li><a href="/" className='bg-white inline-block py-1 px-3 hover:underline'>Home</a></li>
          <li><a href="/" className='bg-white inline-block py-1 px-3 hover:underline'>AboutMe</a></li>
          <li><a href="/" className='bg-white inline-block py-1 px-3 hover:underline'>Contact</a></li>
        </ul>
      </nav> */}
    </header>
  );
}
