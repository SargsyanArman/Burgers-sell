import React from 'react';

const BurgerItem = ({ burgersData, handleMouseUp, add }) => {
  return (
    <div className='mt-10'>
      <ul className='flex flex-wrap justify-around gap-8'>
        {burgersData.map((burger,idx) => (
          <li key={burger.id}>
            <div className='flex flex-col h-[441px] w-[300px] rounded-[18px] p-3 bg-white'>
              <img src={burger.image} alt={burger.burgerName} />
              <div className='font-semibold text-[24px] mt-4'>
                <span className='price'>{burger.price} </span>
                <span>₽</span>
              </div>
              <span className='mt-2'>{burger.burgerName}</span>
              <span className='mt-7 text-[#B1B1B1]'>{burger.weight}г</span>
              <button
                className='mt-2 py-[11px] px-[92px] bg-[#F9F9F9] rounded-[12px] cursor-pointer hover:bg-[#FFAB08] hover:text-white focus:bg-[#F86310]'
                onMouseUp={handleMouseUp}
                onClick={() => add(burger)}
              >
                Добавить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerItem;