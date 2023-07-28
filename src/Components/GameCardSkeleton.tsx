import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card  width='300px'borderRadius={10} overflow='hidden' boxShadow='base' margin={'50px'}>
        <Skeleton height='200px'/>
        <SkeletonText/>
    </Card>
  )
}

export default GameCardSkeleton
