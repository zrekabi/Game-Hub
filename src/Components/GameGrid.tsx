import {SimpleGrid,Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props{
  genre:Genre|null
  platform:Platform|null
}
const GameGrid = ({genre,platform}:Props) => {
  
  const {data,error,isLoading}=useGames(genre,platform)
  const skeletons=[1,2,3,4,5,6]
  return (
    <>
    {error&& <Text>{error}</Text>}
  <SimpleGrid columns={{sm:1,md:2,lg:3}}>
    {isLoading&& skeletons.map(s=><GameCardSkeleton key={s}/>)}
    {data.map(game=><GameCard key={game.id} game={game}/>
    )}
  </SimpleGrid>
    </>
  )
};

export default GameGrid;
