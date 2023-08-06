import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import SortSelector from "./Components/SortSelector";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import GameHeading from "./Components/GameHeading";
import Emoji from "./Components/Emoji";

export interface GameQuery{
  genre:Genre|null
  platform:Platform |null
  sortOrder:string
  search:string

}

const App = () => {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{base:'1fr' ,lg:'250px 1fr'}}
      >
        <GridItem area={"nav"}>
          <NavBar onSearch={search=>setGameQuery({...gameQuery,search})}></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} padding={'5px'}>
            <GenresList selectedGenre={gameQuery.genre} onSelectGenre={genre=>setGameQuery({...gameQuery,genre})}/>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            
          <GameHeading gameQuery={gameQuery}/>
          <HStack spacing={5} marginBottom={5}>
          <PlatformSelector onSelect={platform=>setGameQuery({...gameQuery,platform})} platform={gameQuery.platform}/>
          <SortSelector selectedsort={gameQuery.sortOrder}onSelectSort={sortOrder=>setGameQuery({...gameQuery,sortOrder})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
          </Box>

        </GridItem>
      </Grid>
      
    </>
  );
};

export default App;
