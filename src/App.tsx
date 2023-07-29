import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre,setSelectedGenre]=useState<Genre|null>(null)
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
            <GenresList onSelectGenre={setSelectedGenre}/>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid genre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
