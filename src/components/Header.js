import React from 'react';

// Import link

import {Link} from 'react-router-dom';

// Import logo

import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
    <div className='container mx-auto flex justify-between items-center'>
      {/* Logo */}
      <Link to='/'>
        <img  className='h-10' src={Logo} alt=''/>
      </Link>
      <div className='flex items-center gap-6'>
        <Link className='hover:text-cyan-900 transition' to=''>Login</Link>
        <Link className='bg-cyan-700 hover:bg-cyan-800 text-white px-4 
        py-3 rounded-lg transition' to=''>Criar conta</Link>
      </div>
    </div>
  </header>
  );
};

export default Header;
