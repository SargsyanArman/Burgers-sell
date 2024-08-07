import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ allMenu }) => {
  const location = useLocation();
  const currentPath = decodeURIComponent(location.pathname);

  return (
    <nav className='w-full px-[90px] mt-15'>
      <ul className='flex flex-wrap gap-x-3 mt-[70px] justify-around'>
        {allMenu.map((item) => {
          const itemPath = `/${item.name.toLowerCase()}`;
          const decodedItemPath = decodeURIComponent(itemPath);
          const isActive = currentPath === decodedItemPath;

          return (
            <li
              key={item.id}
              className={`flex items-center justify-center rounded-full border-2 ${isActive ? 'bg-yellow-500 border-yellow-500' : 'bg-white border-white'} flex-shrink w-auto min-w-[60px] max-w-[120px] hover:border-yellow-500`}
            >
              <Link to={itemPath} className='flex items-center px-2 py-2'>
                <img src={item.img} alt={item.name} className='' />
                <span className=''>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
