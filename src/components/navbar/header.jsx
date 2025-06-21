import React, { useEffect, useState } from 'react';

function Header() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div className='text-xl text-amber-600 text-center py-2 font-semibold' 
        id='header'>
          npm run tailwind, npm start 둘다해야함
        </div>
      )}
    </>
  );
}

export default Header