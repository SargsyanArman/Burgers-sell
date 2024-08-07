import React from 'react';
import BurgerItem from './BurgerItem';
import burger_first from '../../../../images/burger-photos/photo-0.png';
import burger_second from '../../../../images/burger-photos/photo-1.png';
import burger_third from '../../../../images/burger-photos/photo-2.png';
import burger_fourth from '../../../../images/burger-photos/photo-3.png';
import burger_fifth from '../../../../images/burger-photos/photo-4.png';
import burger_sixth from '../../../../images/burger-photos/photo-5.png';

const Burgers = ({ add, handleMouseUp }) => {
  const burgerImages = [burger_first, burger_second, burger_third, burger_fourth, burger_fifth, burger_sixth];
  const burgerPrices = [689, 550, 639, 480, 450, 560];
  const burgerNames = ['Мясная бомба', 'Сытный', 'Тяжелый удар', 'Вечная классика', 'Итальянский', 'Мясная бомба'];
  const burgerWeight = [450, 330, 500, 512, 626, 490];

  const burgers = burgerImages.map((_, i) => ({
    id: i + 1,
    image: burgerImages[i],
    price: burgerPrices[i],
    burgerName: burgerNames[i],
    weight: burgerWeight[i],
    quantity: 1
  }));

  return (
    <div className='flex flex-col mt-[59px]'>
      <h2 className='ml-5 text-[40px] font-semibold'>Бургеры</h2>
      <BurgerItem burgersData={burgers} handleMouseUp={handleMouseUp} add={add} />
    </div>
  );
};

export default Burgers;
