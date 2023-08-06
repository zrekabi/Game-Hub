import React from 'react'
import { Game } from '../hooks/useGames'
import { Card,CardBody,HStack,Heading,Image ,Text, VStack} from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import Emoji from './Emoji'

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card  borderRadius={10} overflow='hidden' boxShadow='base' margin={'10px'}>
        <Image src={game.background_image}/>
        <CardBody>
        <HStack  whiteSpace='break-spaces' justifyContent={'space-between'} >
        <PlatformIconList platform={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <Emoji rating={game.rating_top}/>
          
        </CardBody>

    </Card>
  )
}

export default GameCard
