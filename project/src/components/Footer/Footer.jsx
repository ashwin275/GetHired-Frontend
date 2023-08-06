import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='  w-full bg-neutral-50 rounded-t-lg border-t-2 border-zinc-100 py-4 text-center flex justify-center h-10 mb items-center mt-6  '>
      <p className="text-gray-600 text-sm mr-5">
        &copy; {currentYear} Gethired. All rights reserved.
      </p>
      <p className='ml-5'>
        <a href=""><i className="fa-brands fa-facebook"></i></a>
        <a href=''><i className="fa-brands fa-instagram m-3"></i></a>
        <a href=''><i className="fa-brands fa-google"></i></a>
      </p>
    </div>
    
 
  );
}

export default Footer;
