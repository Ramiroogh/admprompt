import React from 'react'
// Component for Home

const Card = (props) => {
    const { number, title, description, numberColor, descriptionColor, gap } = props;

    const cardClasses = gap ? 'gap-10' : '';

    return (
        <div className={`flex flex-col justify-center items-center gap-3.5 w-64 h-80 bg-white p-5 text-center ${cardClasses}`}>
            <h2 className='text-4xl' style={numberColor}>{number}</h2>
            <h2 className='text-2xl'>{title}</h2>
            <p style={descriptionColor}>{description}</p>
        </div>
    );
};
export default Card;