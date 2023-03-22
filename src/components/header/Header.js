import React, {useState} from 'react'
import {FormInput, SelectInput} from '../formInput/formInput'
import { Autocomplete } from '@react-google-maps/api';
import Logo from './Logo'
import {Container, Cont, FormCont, InputCont, Option} from './header.style'



function Header({category, setCategory, rating, setRating, setCoordinates}) {
const [autocomplete, setAutocomplete] = useState(null);


const onLoad = (autoC) => setAutocomplete(autoC);

const onPlaceChanged = () => {
  const lat = autocomplete.getPlace().geometry.location.lat();
  const lng = autocomplete.getPlace().geometry.location.lng();

  setCoordinates({ lat, lng });
};

 console.log('')

  return (
    <Container>
      <Logo />
      <Cont>
      
      <FormCont>
     
      <InputCont>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <FormInput                   
          type='search'
          name='name'  
          fieldName='Location' 
      />
      </Autocomplete>
  </InputCont>  
 
  <InputCont>  
      <SelectInput 
          type='text'
          name='category'
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          fieldName='Places' 
          // onKeyUp={() => validateZip()}  
      >
          {/* <Option hidden="hidden"></Option> */}
          <Option value='restaurants'> Restaurant</Option>
          <Option value='hotels'> Hotels</Option>
          <Option value='attractions'>Attractions</Option>
        </SelectInput>
      </InputCont>  

      <InputCont>
          <SelectInput 
              type='text'
              name='rating'
              value={rating} 
              onChange={(e) => setRating(e.target.value)} 
              fieldName='Rating' 
              // onKeyUp={() => validateZip()}  
          >
            {/* <Option hidden="hidden"></Option> */}
            <Option value={0}>All</Option>
            <Option value={3}>Above 3.0</Option>
            <Option value={4}>Above 4.0</Option>
            <option value={4.5}>Above 4.5</option>
      </SelectInput>
      </InputCont>
      </FormCont>
      </Cont>
        
      
     
    </Container>
  )
}

export default Header