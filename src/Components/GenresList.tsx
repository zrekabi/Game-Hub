import React from 'react'
import useGenres from '../hooks/useGenres'
import { HStack, List, ListItem,Image,Text, Spinner } from '@chakra-ui/react'

const GenresList = () => {
    const {data,isLoading,error}=useGenres()
    if (error)return null;
    if (isLoading)return<Spinner/>
  return ( 
    <List>
        {data.map(g=><ListItem key={g.id}>
            <HStack  margin={'5px'}>
                <Image src={g.image_background} boxSize={'32px'} borderRadius={8} />
                <Text>{g.name}</Text>
            </HStack></ListItem>)}
    </List>
  )
}

export default GenresList
