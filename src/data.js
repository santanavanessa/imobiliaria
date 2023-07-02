// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'Casa',
    name: 'Casa 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    city: 'Lauro de Freitas',
    address: 'Av. Santos Dumont, 50000',
    bedrooms: '4',
    bathrooms: '3',
    surface: '300m²',
    year: '2016',
    price: '11000',
    agent: {
      image: Agent1,
      name: 'Patricia Borges',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'Casa',
    name: 'Casa 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    city: 'Salvador',
    address: 'Rua Oswaldo Cruz, 2000',
    bedrooms: '5',
    bathrooms: '3',
    surface: '350m²',
    year: '2016',
    price: '20000',
    agent: {
      image: Agent2,
      name: 'Danilo Silva',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'Casa',
    name: 'Casa 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    city: 'Salvador',
    address: 'Avenida Alphaville, 22304',
    bedrooms: '4',
    bathrooms: '2',
    surface: '200m²',
    year: '2016',
    price: '17000',
    agent: {
      image: Agent3,
      name: 'Amado Souza',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'Casa',
    name: 'Casa 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    city: 'Lauro de Freitas',
    address: 'Av. Luiz Tarquínio Pontes, 50000',
    bedrooms: '3',
    bathrooms: '2',
    surface: '80m²',
    year: '2016',
    price: '2000',
    agent: {
      image: Agent4,
      name: 'Catarina Gonçalves',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'Casa',
    name: 'Casa 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    city: 'Salvador',
    address: 'Avenida Orlando Gomes, 10000',
    bedrooms: '3',
    bathrooms: '3',
    surface: '150m²',
    year: '2015',
    price: '7000',
    agent: {
      image: Agent5,
      name: 'Lucas Lago',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'Casa',
    name: 'Casa 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    city: 'Lauro de Freitas',
    address: 'Est do Côco,59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '250m²',
    year: '2014',
    price: '15000',
    agent: {
      image: Agent6,
      name: 'Karen Amaral',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartamento',
    name: 'Apartamento 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    city: 'Lauro de Freitas',
    address: ' R. Praia de Pajussara, 7001',
    bedrooms: '2',
    bathrooms: '1',
    surface: '60m²',
    year: '2012',
    price: '1500',
    agent: {
      image: Agent7,
      name: 'Marcos Costa',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartamento',
    name: 'Apartamento 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    city: 'Salvador',
    address: 'Avenida Alphaville, 8000',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '4000',
    agent: {
      image: Agent8,
      name: 'Joana Douglas',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartamento',
    name: 'Apartamento 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    city: 'Salvador',
    address: 'R. Teódulo de Albuquerque, 1000',
    bedrooms: '1',
    bathrooms: '1',
    surface: '35m²',
    year: '2011',
    price: '1200',
    agent: {
      image: Agent9,
      name: 'Tiago Magalhães',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'Casa',
    name: 'Casa 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    city: 'Lauro de Freitas',
    address: 'R. Carlos Conceição, 6000',
    bedrooms: '5',
    bathrooms: '3',
    surface: '110m²',
    year: '2015',
    price: '5000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'Casa',
    name: 'Casa 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    city: 'Lauro de Freitas',
    address: 'Av. Brigadeiro Mario Epinghaus, 100',
    bedrooms: '3',
    bathrooms: '2',
    surface: '220m²',
    year: '2019',
    price: '15000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'Casa',
    name: 'Casa 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    city: 'Salvador',
    address: 'Rua Macaúbas, 2200',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '1390',
    agent: {
      image: Agent12,
      name: 'Felipe Costa',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'Casa',
    name: 'Casa 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    city: 'Lauro de Freitas',
    address: 'R. Prisco José de Souza, 8000',
    bedrooms: '2',
    bathrooms: '1',
    surface: '62m²',
    year: '2014',
    price: '1800',
    agent: {
      image: Agent1,
      name: 'Patricia Borges',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'Casa',
    name: 'Casa 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    city: 'Salvador',
    address: 'R. Dr. Genésio Salles, 2700',
    bedrooms: '2',
    bathrooms: '2',
    surface: '70m²',
    year: '2011',
    price: '1200',
    agent: {
      image: Agent2,
      name: 'Danilo Silva',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'Casa',
    name: 'Casa 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    city: 'Lauro de Freitas',
    address: 'R. Francisco das Mercês, 9000',
    bedrooms: '3',
    bathrooms: '2',
    surface: '160m²',
    year: '2013',
    price: '2210',
    agent: {
      image: Agent3,
      name: 'Amado Souza',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartamento',
    name: 'Apartamento 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    city: 'Lauro de Freitas',
    address: 'R. João Marques Oliveira, 5500',
    bedrooms: '3',
    bathrooms: '2',
    surface: '80m²',
    year: '2011',
    price: '4000',
    agent: {
      image: Agent4,
      name: 'Catarina Gonçalves',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartamento',
    name: 'Apartamento 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    city: 'Salvador',
    address: 'Alameda Marine, 7000',
    bedrooms: '3',
    bathrooms: '1',
    surface: '100m²',
    year: '2012',
    price: '3200',
    agent: {
      image: Agent5,
      name: 'Lucas Lago',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartamento',
    name: 'Apartamento 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    city: 'Lauro de Freitas',
    address: 'R. Jurema, 990',
    bedrooms: '3',
    bathrooms: '1',
    surface: '42m²',
    year: '2010',
    price: '1000',
    agent: {
      image: Agent6,
      name: 'Karen Amaral',
      phone: '0123 456 78910',
    },
  },
];
