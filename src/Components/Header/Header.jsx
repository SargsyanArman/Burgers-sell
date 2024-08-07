import React from 'react';
import HeaderIntroduce from './HeaderIntroduce';
import Navigation from './Navigation';
import headerBurger from '../../../images/headerimg/header-burger.png';
import youMealLogo from '../../../images/headerimg/whiteLogo.png';
import burger from '../../../images/navimg/burger.png';
import onion from '../../../images/navimg/onion.png';
import hotDog from '../../../images/navimg/hot-dog.png';
import combo from '../../../images/navimg/combo.png';
import shaurma from '../../../images/navimg/shaurma.png';
import pizza from '../../../images/navimg/pizza.png';
import bok from '../../../images/navimg/bok.png';
import desert from '../../../images/navimg/desert.png';
import sous from '../../../images/navimg/sous.png';
import { Outlet } from 'react-router-dom';

const Header = () => {

  const navMenuList = [
    { name: 'Бургери', img: burger, id: 1 },
    { name: 'Закуски', img: onion, id: 2 },
    { name: 'Хот-Доги', img: hotDog, id: 3 },
    { name: 'Комбо', img: combo, id: 4 },
    { name: 'Шаурма', img: shaurma, id: 5 },
    { name: 'Пицца', img: pizza, id: 6 },
    { name: 'Вок', img: bok, id: 7 },
    { name: 'Десерты', img: desert, id: 8 },
    { name: 'Соусы', img: sous, id: 9 },
  ];

  return (
    <div className=''>
      <HeaderIntroduce headerBurger={headerBurger} youMealLogo={youMealLogo} />
      <Navigation allMenu={navMenuList} />
    </div>


  );
}

export default Header;
