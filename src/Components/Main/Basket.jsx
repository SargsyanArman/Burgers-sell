import React, { useEffect, useState } from 'react';
import BasketItems from './BasketItems';
import ModalWindow from './ModalWindow'

const Basket = ({ handleMouseUp, burgers, setBurgers }) => {
  const [basketHeight, setBasketHeight] = useState(109);
  const [basketCount, setBasketCount] = useState(0);
  const [total, setTotal] = useState(0)


  const increment = (id) => {
    setBurgers(prevBurgers => prevBurgers.map(burger => {
      if (burger.id === id && burger.quantity < 10) {
        return { ...burger, quantity: burger.quantity + 1 };
      }
      return burger;
    }));
  };



  const decrement = (id) => {
    setBurgers(prevBurgers => prevBurgers.map(burger => {
      if (burger.id === id && burger.quantity > 1) return { ...burger, quantity: burger.quantity - 1 }
      else return burger
    }));
  };

  const handleChange = (id, value) => {
    const newValue = value === '' ? '' : Math.max(1, Math.min(10, Number(value)));
    setBurgers(prevBurgers =>
      prevBurgers.map(burger =>
        burger.id === id
          ? { ...burger, quantity: newValue }
          : burger
      )
    );
  };


  useEffect(() => {
    setBasketCount(burgers.reduce((totalQnt, burger) => totalQnt + burger.quantity, 0));
    setTotal(burgers.reduce((totalSum, burger) => (burger.quantity * burger.price) + totalSum, 0))
    setBasketHeight(180 + burgers.length * 98);
  }, [burgers])

  return (
    <div className='flex-shrink-0 h-[109px] min-h-[109px] w-[313px] min-w-[300px] flex flex-col justify-center bg-white rounded-[18px] mt-[131px]'
      style={{ height: `${basketHeight}px` }}
    >
      <div className='flex justify-between mx-4 '>
        <span className='text-2xl font-semibold'>Корзина</span>
        <span className='text-xs pt-1 w-10 h-6 text-center bg-[#F2F2F3] rounded-[6px]'>{basketCount}</span>
      </div>
      <BasketItems increment={increment} decrement={decrement} handleChange={handleChange} burgers={burgers} total={total} />
      {burgers.length !== 0 && <ModalWindow handleMouseUp={handleMouseUp} />}
    </div>
  );
};

export default Basket;