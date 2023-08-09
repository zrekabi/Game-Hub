import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card  borderRadius={10} overflow='hidden' boxShadow='base' margin={'10px'}>
        <Skeleton height='200px'/>
        <SkeletonText/>
    </Card>
  )
}

export default GameCardSkeleton
