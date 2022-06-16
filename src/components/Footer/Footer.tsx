import React from "react";

const yearStr = new Date().getFullYear() <= 2022 ? '2022' : `2022 - ${new Date().getFullYear()}`;

function Footer() {
  return (
    <footer className='absolute bottom-0 w-screen text-center p-6 bg-slate-300'>
      事件记录 © {yearStr} Created by elvinn
    </footer>
  );
}

export default Footer;
