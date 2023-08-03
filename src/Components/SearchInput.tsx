import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <Input placeholder='Search game...' borderRadius={20}></Input>
    </InputGroup>
  )
}

export default SearchInput
