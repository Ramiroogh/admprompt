import React from 'react'

const ItemInfo = ({ image, title, description }) => {
  return (
    <div className='flex gap gap-5 items-center'>
        <div className='flex' style={{ width: '50px', height: '50px', backgroundColor: '#75AC9D' }}>
        <img src={image} alt="Image"  />
        </div>
        <div className='flex flex-col justify-center w-80'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    
    </div>
    );
};

export default ItemInfo;