import React from 'react';

// import data
import { housesData } from '../data';

// import use params
import { useParams } from 'react-router-dom';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

// import link
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();
 
  // get the house based on the id
  const house = housesData.find(house => {
    return house.id === parseInt(id);

    
  });


  return (
  <section>
    <div className='container mx-auto min-h-[800px]
    mb-14'>
      <div className='flex flex-col lg:flex-row 
      lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl text-neutral-900 font-semibold'>{house.name}</h2>
          <h3 className='text-lg text-neutral-900 mb-4'>{house.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2
        text-sm'>
          <div className='bg-green-500 text-white
          px-3 rounded-full'>{house.type}</div>
          <div className='bg-cyan-500 text-white
          px-3 rounded-full'>{house.city}</div>
        </div>
        <div className='text-3xl font-semibold 
        text-cyan-600'>R$ {house.price},00</div>
      </div>
      <div className='flex flex-col items-start
      gap-8 lg:flex-row'>
      <div className='max-w-[768px]'>
        <div className='mb-8'>
          <img src={house.imageLg} alt=''/>
        </div>
        <div className='flex gap-x-6
        text-gray-600 mb-6'>
          <div className='flex gap-x-2
          items-center'>
            <BiBed className='text-2xl'/>
            <div>{house.bedrooms}</div>
          </div>
          <div className='flex gap-x-2
          items-center'>
            <BiBath className='text-2xl'/>
            <div>{house.bathrooms}</div>
          </div>
          <div className='flex gap-x-2
          items-center'>
            <BiArea className='text-2xl'/>
            <div>{house.surface}</div>
          </div>
        </div>
        <div>{house.description}</div>
      </div>
      <div className='flex-1 bg-white w-full
      mb-8 border border-gray-300 rounded-lg 
      px-6 py-8'>
        <div className='flex items-center
        gap-x-4 mb-8'>
          <div className='w-20 h-20 p-1 border
          border-gray-300 rounded-full'> 
            <img src={house.agent.image} alt=''/>
          </div>
          <div>
            <div className='font-bold text-lg'>{house.agent.name}</div>
            <Link to='' className='text-cyan-700
            text-sm'>Ver imóveis listados
            </Link>
          </div>
        </div>
        {/* form */}
        <form className='flex flex-col gap-y-4'>
          <input 
          className='border 
          border-gray-300
          focus:border-cyan-700 outline-none
          rounded w-full px-4 h-14 text-sm'
          type='text'
          placeholder='Nome*'
          />
          <input 
          className='border 
          border-gray-300
          focus:border-cyan-700 outline-none
          rounded w-full px-4 h-14 text-sm'
          type='text'
          placeholder='E-mail*'
          />
          <input 
          className='border 
          border-gray-300
          focus:border-cyan-700 outline-none
          rounded w-full px-4 h-14 text-sm' 
          type='text'
          placeholder='Celular*'
          />
          <textarea className='border
          border-gray-300
          focus:border-cyan-700 resize-none 
          outline-none rounded w-full p-4 h-36
          text-sm text-gray-400' placeholder='Mensagem*'
          defaultValue='Olá, tenho interesse neste imóvel'>
          </textarea>
          <div className='flex gap-x-2'>
            <button className='bg-cyan-700
            hover:bg-cyan-800 text-white
            rounded p-4 text-sm w-full
            transition'>Enviar
            </button>
            <button className='border
            border-cyan-700
            hover:border-cyan-500 rounded p-4
            text-sm w-full transition'>Whatsapp</button>
          </div>
        </form>
      </div>
   </div>
  </div>

  </section>);
};

export default PropertyDetails;
