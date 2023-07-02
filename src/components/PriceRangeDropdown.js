import React, { useState, useEffect, useContext} from 'react';

//Import icons 

import { RiWallet3Line, RiArrowDownSLine,
RiArrowUpSLine } from 'react-icons/ri';

// import headless ui
 import { Menu } from '@headlessui/react';

 //import house context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const {price, setPrice} =
   useContext(HouseContext);

   const [isOpen, setIsOpen] = useState(false);

   const prices = [
    {
      value: 'Faixa de valor (qualquer)',
    },
    {
      value: '1000 - 3000',
    },
    {
      value: '3001 - 5000',
    },
    {
      value: '5001 - 7000',
    },
    {
      value: '7001 - 10000',
    },
    {
      value: '10001 - 30000',
    },
   ]

  return (
    <Menu as='div' className='dropdown relative'>
       <Menu.Button onClick={()=> setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
      <RiWallet3Line
      className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium
        leading-tight' >{price}</div>
        

        
      </div>
      {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : ( 
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {prices.map((price, index)=> {
        return (
          <Menu.Item
          onClick={()=> setPrice(price.value)}
          className='cursor-pointer
          hover:text-cyan-700 transition'
          as='li' key={index}>
            {price.value}
          </Menu.Item>
        )
      })}
    </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
