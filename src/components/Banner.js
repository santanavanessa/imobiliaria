import React from 'react';

// Import Image
import Image from '../assets/img/house-banner.png'

// Import components
import Search from '../components/Search';
const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 
  xl:mb-24'>
    <div className='flex flex-col lg:flex-row'> 
      
      <div className='lg:ml-8 xl:ml-[135px] flex
      flex-col items-center lg:items-start text-center
      lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl text-neutral-900 lg:text-[58px] font-semibold
        leading-none mb-6'>
          <span className='text-cyan-800'>Alugue</span> seu imóvel dos sonhos aqui.</h1>
        <p className='max-w-[480px] mb-8'>
        Imóveis residenciais nas cidades de Salvador e Lauro de Freitas.
        Alugue sem fiador, agendando online e receba suas chaves na mão em até 48 horas.
        </p>
        
      </div>
      {/*Image*/}
     <div className='hidden flex-1 lg:flex justify-end
     items-end' >
     <img src={Image} alt=''/>
     </div>
    </div>
    <Search/>

  </section>;
};

export default Banner;
