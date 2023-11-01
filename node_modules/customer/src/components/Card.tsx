import React from 'react';

interface CardProps {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
}

const Card: React.FC<CardProps> = ({ id, title, category, price, image }) => { 
    return (
        <div className='bg-white shadow-md w-80 overflow-hidden m-2'>
            <a href='#'>
                <img 
                    className='h-80 w-22 object-cover bg-center mx-auto'
                    src={image}
                    alt={title}
                />
            </a>
            <div className='px-4 py-3 w-72'>
                <span className='text-second mr-3 uppercase text-xs'>Category: {category}</span>
                <p className='text-lg font-bold text-first truncate block capitalize'>{title}</p>
                <p className='text-sm text-gray-600 cursor-auto ml-2'>$ {price}</p>
            </div>
        </div>
    );
}

export default Card;