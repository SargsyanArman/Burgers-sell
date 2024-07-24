import React from 'react'

const HeaderIntroduce = ({youMealLogo, headerBurger}) => {
    return (
        <div className="bg-header-bg bg-cover bg-center bg-no-repeat h-[500px] w-full">
            <div className='flex items-center justify-center flex-col pt-6'>
                <div className='flex '>
                    <a href="/" className=''>
                        <img src={youMealLogo} alt="You Meal logo to main page" />
                    </a>
                </div>
                <div className='grid grid-cols-2 mt-7'>
                    <img src={headerBurger} className='pl-14' alt="burger-logo" />
                    <div className='grid gr-2 items-center pb-2'>
                        <p className='text-[50px] text-white font-extrabold leading-[55px] '>
                            Только самые
                            <br />
                            <span className='text-[#FF5C00]'>
                                сочные бургери
                            </span>
                        </p>
                        <p className='text-white'>Бесплатная доставка от 599₽</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderIntroduce