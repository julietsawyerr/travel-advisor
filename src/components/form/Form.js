import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import {
  Container, 
  Heading, FormCont, InputField, Half
} from './form.style'

function Form() {
  return (
    <Container>
      <Heading>You adventure travel expect in Nigeria</Heading>
      <FormCont>
        <InputField type='text' placeholder='Where do you want to go?'/>
        <Half>
        <InputField type='text' placeholder='Hotels'/>
        <InputField type='text' placeholder='rating'/>
        </Half>
      </FormCont>
    </Container>
  )
}

export default Form