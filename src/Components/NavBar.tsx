import { HStack ,Image} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch:(search:string)=>void
}
const NavBar = ({onSearch}:Props) => {
  return (
    <div>
      <HStack justifyContent={'space-between'} padding='10px'>
        <Image src={logo} boxSize='60px' />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
      </HStack>
    </div>
  )
}

export default NavBar
