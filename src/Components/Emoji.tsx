import meh from '../assets/meh.webp'
import bullseye from '../assets/bulls-eye.webp'
import thumbsup from '../assets/thumbs-up.webp'
import {Image, ImageProps } from "@chakra-ui/react";

interface Props{
    rating:number
}
const Emoji = ({rating}:Props) => {
    const EmojiMap: {[key:number]:ImageProps}={
        3:{src:meh,alt:'meh',boxSize:'25px'},
        4:{src:thumbsup,alt:'thumbs-up',boxSize:'25px'},
        5:{src:bullseye,alt:'bulls-eye',boxSize:'32px'}
        
    }
    
  return (
    <Image {...EmojiMap[rating]} marginTop={50}></Image>
  )
}

export default Emoji
