import React from 'react';
import yourMealLogo from '../../../images/footer-img/orange-logo.png';
import telegramLogo from '../../../images/footer-img/telegram.png';
import vkontakteLogo from '../../../images/footer-img/vk.png';

const Footer = () => {
    return (
        <div className="grid grid-cols-50-25-25 h-[244px] mt-[110px] bg-white pl-[75px]">
            <div className="pt-[61px]">
                <img src={yourMealLogo} alt="yourMealLogo" />
            </div>
            <div className="pt-[52px]">
                <span className="text-[24px] block mb-6">Номер для заказа</span>
                <span>041-03-03-52</span>
            </div>
            <div className="pt-[52px]">
                <span className="text-[24px] block mb-6">Мы в соц сетях</span>
                <div className="flex gap-10">
                    <a href="/"><img src={telegramLogo} alt="telegram link" /></a>
                    <a href="/"><img src={vkontakteLogo} alt="vkontakte link" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
