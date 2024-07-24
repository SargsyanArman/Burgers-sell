import React from 'react';

const BasketItems = ({ increment, decrement, handleChange, burgers, isBurger, total }) => {
  return (
    <div className='mx-4'>
      {isBurger ? (
        <ul>
          {burgers.map((burgerItem) => (
            <li key={burgerItem.id}>
              <div className='grid grid-cols-grid-burger w-[268px] items-center h-[84px] mx-4 mt-3 border-solid border-y-[1px] border-[#F2F2F3]'>
                <img src={burgerItem.image} className='w-16 h-[52px] rounded-[8px]' alt="" />
                <div className='flex flex-col gap-[2px] text-xs '>
                  <span className=''>{burgerItem.burgerName}</span>
                  <span className='text-[#B1B1B1]'>{burgerItem.weight}г</span>
                  <span className='font-bold'>{burgerItem.price}₽</span>
                </div>
                <div className='flex justify-end'>
                  <div className='flex justify-around w-[84px] h-[40px] py-2 px-3 bg-[#F2F2F3] rounded-lg'>
                    <button onClick={() => decrement(burgerItem.id)}>-</button>
                    <input
                      type="number"
                      name="number"
                      value={burgerItem.quantity}
                      min={0}
                      max={99}
                      onChange={(e) => handleChange(burgerItem.id, e.target.value)}
                      className='w-[31%] text-center border-none outline-none bg-transparent'
                    />
                    <button onClick={() => increment(burgerItem.id)}>+</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <div className='flex justify-between px-4 pt-4 pb-6'>
            <span>Итого</span>
            <span className=''>{total}₽</span>
          </div>
        </ul>
      ) : (
        <p>Тут пока пусто :(</p>
      )}
    </div>
  );
};

export default BasketItems;
