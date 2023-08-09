import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/usePlatforms'
import usePlatforms from '../hooks/usePlatforms'

interface Props{
     onSelect:(p:Platform)=>void
     platform:Platform|null
}

const PlatformSelector = ({onSelect,platform}:Props) => {
    const {data,error}=usePlatforms()
    if (error) console.log(error);
    ;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{platform?platform.name:'Platforms'}</MenuButton>
        <MenuList>
            {data.map((d)=><MenuItem key={d.id} onClick={()=> onSelect(d)}>{d.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector
