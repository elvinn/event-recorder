import React from 'react';

function Header() {
  return (
    <div className='sticky w-screen h-16 bg-white border-b border-b-slate-200'>
      <div className='max-w-8xl mx-auto flex items-center h-16 px-2'>
        <img src='https://elvinn.wiki/logo.jpeg' alt='logo' className='w-14 h-14' />
        <h1 className='font-bold mb-0'>事件记录</h1>
        <div className='ml-auto flex items-center'>
          <a className='font-bold text-slate-700' href='https://elvinn.wiki/' target='_blank' rel="noreferrer">关于</a>
          <div className='w-px h-5 mx-4 bg-slate-300' />
          <a className='font-bold text-slate-700' href='https://github.com/elvinn/event-recorder' target='_blank' rel="noreferrer">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
