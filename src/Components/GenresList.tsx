import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import { HStack, List, ListItem,Image,Text, Spinner, Button } from '@chakra-ui/react'

interface Props{
    onSelectGenre:(genre:Genre)=>void
}
const GenresList = ({onSelectGenre}:Props) => {
    const {data,isLoading,error}=useGenres()
    if (error)return null;
    if (isLoading)return<Spinner/>
  return ( 
    <List>
        {data.map(g=><ListItem key={g.id}>
            <HStack  padding={'5px'} >
                <Image src={g.image_background} boxSize={'32px'} borderRadius={8} />
                <Button onClick={()=>onSelectGenre(g)}variant={'link'} fontSize={'md'} padding={'5px'}>{g.name}</Button>
            </HStack></ListItem>)}
    </List>
  )
}

export default GenresList
