import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Basket from './Basket';
import Menu from '../../Rooters/Menu';

const Main = () => {
  const [burgers, setBurgers] = useState([]);
  const { menu } = useParams();  // Получаем параметр меню из URL

  const handleMouseUp = (event) => {
    event.currentTarget.blur();
  };

  const handleClone = (burger) => {
    const existingBurgerIndex = burgers.findIndex(item => item.id === burger.id);

    if (existingBurgerIndex !== -1) {
      const updatedBurgers = burgers.map((item) => {
        if (item.id === burger.id && item.quantity < 10) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setBurgers(updatedBurgers);
    } else {
      const newElement = { ...burger, quantity: 1 };  // Устанавливаем начальное количество в 1
      setBurgers([...burgers, newElement]);
    }
  };

  return (
    <main className='flex mx-[75px]'>
      <Basket burgers={burgers} setBurgers={setBurgers} handleMouseUp={handleMouseUp} />
      <Menu add={handleClone} handleMouseUp={handleMouseUp} /> {/* Рендерим компонент Menu */}
    </main>
  );
};

export default Main;
