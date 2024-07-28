import React, { useState } from 'react';
import Basket from './Basket';
import Burgers from './Burgers';

const Main = () => {
  const [burgers, setBurgers] = useState([]);

  const handleMouseUp = (event) => {
    event.currentTarget.blur();
  };

  const handleClone = (burger) => {
    const existingBurgerIndex = burgers.findIndex(item => item.id === burger.id);

    if (existingBurgerIndex !== -1) {
      const updateBurgers = burgers.map((item) => {
        if (item.id === burger.id && item.quantity < 10) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      });
      setBurgers(updateBurgers);
    } else {
      const newElement = { ...burger };
      setBurgers([...burgers, newElement]);
    }
  };


  return (
    <main className='flex mx-[75px]'>
      <Basket burgers={burgers} setBurgers={setBurgers} handleMouseUp={handleMouseUp} />
      <Burgers add={handleClone} handleMouseUp={handleMouseUp} />
    </main>
  );
};

export default Main;
