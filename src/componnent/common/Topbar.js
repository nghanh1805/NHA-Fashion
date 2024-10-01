import React from 'react';
import '../../assets/styles/Topbar.css';

export default function Topbar() {
  return (
    <div className='bg-zinc-950 h-12 flex items-center justify-between pl-10 text-sm'>
      <p className='text-white'>
        Free shipping, 30-day return or refund guarantee.
      </p>
      <a href="/login" className=" text-white flex items-center pr-10 ">
        <i className="far fa-user-circle"></i>
        <span className="ml-2">SIGN IN</span>
      </a>
    </div>
  );
}
