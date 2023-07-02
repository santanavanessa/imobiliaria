import React, {useState, useEffect, createContext} from 'react';

// Import data

import { housesData } from '../data';

//create Context
export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState('Cidade (qualquer)');
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState('Imóvel (qualquer)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Valor (qualquer)');
  const [loading, setLoading] = useState(false);

     // return all cities

     useEffect(() => {
      const allCities = houses.map((house) => {
        return house.city;
      });
     
      // remove duplicates
      const uniqueCities = ['Cidade (qualquer)', ...new Set(allCities)];
  
    // set cities state
    setCities(uniqueCities);
     }, []);

       // return all properties

    useEffect(() => {
      const allProperties = houses.map((house) => {
        return house.type;
      });
     
      // remove duplicates
      const uniqueProperties = ['Tipo de imóvel (qualquer)', ...new
       Set(allProperties)];
  
     // set properties state
     setProperties(uniqueProperties);
     }, []);



    const handleClick = () => {
      // set loading
      setLoading(true);
      // function que verifica se a string possui 'tod'
      const isDefault = (str) => {
       // const result1
        return str.split(' ').includes('(qualquer)') ;
 };

       
      // get the first price's value and parse it to number
      //Mudar para parseFloat e colocar o preço em real
      const minPrice = parseInt(price.split(' ')[0]);

      // exibir o valor máximo da faixa de preço do imóvel
      // converter o valor para número
      const maxPrice = parseInt(price.split(' ')[2]);

      const newHouses = housesData.filter((house) => {
        const housePrice = parseInt(house.price);

        // if all values are selected
        if ( 
          house.city === city &&
          house.type === property &&  
          housePrice >= minPrice &&
          housePrice <= maxPrice
          ) {
            return house;

          }

          // if all values are default
          if (isDefault(city)&& isDefault(property)
          && isDefault(price)) {
            return house;
          }

          // if coutry is not default
          if (!isDefault(city) && isDefault(property)
          && isDefault(price)){
            return house.city === city;
          }

          // if property is not default
          if (!isDefault(property) && isDefault(city)
          && isDefault(price)) {
            return house.type === property;
          }

          // if price is not default
          if (!isDefault(price) && isDefault(city)
          && isDefault(property)) {
            if (housePrice >= minPrice && housePrice <= maxPrice){
              return house;
            }
          }

          if (!isDefault(city) && !isDefault
          (property) && isDefault(price)) {
            return house.city === city && 
            house.type === property;
          }

          if (!isDefault(city) && isDefault(property)
          && !isDefault(price)){
            if(housePrice >= minPrice && housePrice <=
              maxPrice) {
                return house.city === city;
              }
          }

          // property and price is not default
          if (isDefault(city) && !isDefault
          (property) && !isDefault(price)) {
            if(housePrice >= minPrice && housePrice <=
              maxPrice) {
                return house.type === property;
              }
          }
      });

      setTimeout(()=> {
        return (newHouses.length < 1 ? setHouses([]) :
        setHouses(newHouses),
        setLoading(false)
        );
      }, 1000);
    };
    
  return (
    <HouseContext.Provider
    value={{
      city,
      setCity,
      cities,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
    }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
