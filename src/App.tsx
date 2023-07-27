import { Grid, GridItem, Show } from '@chakra-ui/react'
import React from 'react'

const App = () => {
  return (
    <>
    <Grid templateAreas={{base:`"nav" "main"`,lg:`"nav nav" "aside main"`}}>
      <GridItem area={"nav"} bg='khaki'>nav</GridItem>
      <Show above='lg'>
      <GridItem area={"aside"} bg='gold'>aside</GridItem>  
      </Show>
      <GridItem area={"main"} bg='gray'>main</GridItem>

    </Grid>
    </>
  )
}

export default App
