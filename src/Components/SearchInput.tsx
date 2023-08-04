import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props{
    onSearch:(search:string)=>void
}
const SearchInput = ({onSearch}:Props) => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current)onSearch(ref.current.value)
    }}>
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <Input ref={ref} placeholder='Search game...' borderRadius={20}></Input>
    </InputGroup>
    </form>
  )
}

export default SearchInput