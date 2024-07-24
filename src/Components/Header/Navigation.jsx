import React from 'react';

const Navigation = ({ allMenu }) => {
  return (
    <nav className='w-full px-[90px] mt-15'>
      <ul className='flex flex-wrap gap-x-3 mt-[70px] justify-around'>
        {allMenu.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-center rounded-full border-2 ${item.id === 1 ? 'bg-[#FFAB08] border-[#FFAB08]' : 'bg-white border-white'} flex-shrink w-auto min-w-[60px] max-w-[120px] hover:border-yellow-500`}
          >
            <a href="/" className='flex items-center px-2 py-2'>
              <img src={item.img} alt={item.name} className='' />
              <span className=''>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
