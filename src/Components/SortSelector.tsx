import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectSort:(sort:string)=>void
    selectedsort:string
}

const SortSelector = ({onSelectSort,selectedsort}:Props) => {
    const sortOrder=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release rate'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'},
    ]
    const currentsort=sortOrder.find(s=>s.value===selectedsort)
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>ordered by: {currentsort?.label}</MenuButton>
    <MenuList>
        {sortOrder.map(s=><MenuItem onClick={()=>onSelectSort(s.value)}key={s.value}value={s.value}>{s.label}</MenuItem>)}
    </MenuList>
</Menu>
  )
}

export default SortSelector
