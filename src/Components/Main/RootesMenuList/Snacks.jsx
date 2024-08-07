import React from 'react';

const Snacks = ({ add, handleMouseUp }) => {
    // Пример данных для закусок, замените на ваши данные
    const snacks = [
        { id: 1, image: '/path/to/snack1.png', price: 100, snackName: 'Закуска 1', weight: 100 },
        { id: 2, image: '/path/to/snack2.png', price: 200, snackName: 'Закуска 2', weight: 150 },
        // Добавьте больше данных по необходимости
    ];

    return (
        <div className='flex flex-col mt-[59px]'>
            <h2 className='ml-5 text-[40px] font-semibold'>Закуски</h2>
            <div className='mt-10'>
                <ul className='flex flex-wrap justify-around gap-8'>
                    {snacks.map((snack) => (
                        <li key={snack.id}>
                            <div className='flex flex-col h-[441px] w-[300px] rounded-[18px] p-3 bg-white'>
                                <img src={snack.image} alt={snack.snackName} />
                                <div className='font-semibold text-[24px] mt-4'>
                                    <span className='price'>{snack.price} </span>
                                    <span>₽</span>
                                </div>
                                <span className='mt-2'>{snack.snackName}</span>
                                <span className='mt-7 text-[#B1B1B1]'>{snack.weight}г</span>
                                <button
                                    className='mt-2 py-[11px] px-[92px] bg-[#F9F9F9] rounded-[12px] cursor-pointer hover:bg-[#FFAB08] hover:text-white focus:bg-[#F86310]'
                                    onMouseUp={handleMouseUp}
                                    onClick={() => add(snack)}
                                >
                                    Добавить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Snacks;
