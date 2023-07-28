import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg="grey">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
