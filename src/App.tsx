import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import SortSelector from "./Components/sortSelector";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery{
  genre:Genre|null
  platform:Platform |null

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
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} padding={'5px'}>
            <GenresList selectedGenre={gameQuery.genre} onSelectGenre={genre=>setGameQuery({...gameQuery,genre})}/>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack paddingLeft={2} spacing={5} marginBottom={5}>
          <PlatformSelector onSelect={platform=>setGameQuery({...gameQuery,platform})} platform={gameQuery.platform}/>
          <SortSelector/>

          </HStack>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
