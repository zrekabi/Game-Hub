import { HStack, Switch, useColorMode,Text } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
  const {toggleColorMode,colorMode}=useColorMode()
  return (
    <HStack >
      <Switch  colorScheme={'orange'}isChecked={colorMode === 'dark'} onChange={toggleColorMode}></Switch>
      <Text whiteSpace={'nowrap'}> Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch

