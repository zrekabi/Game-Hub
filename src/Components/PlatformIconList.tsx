import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: platform[];
}

const PlatformIconList = ({ platform }: Props) => {
    const IconMap:{[key:string]:IconType}={
        pc:FaWindows,
        mac:FaApple,
        linux:FaLinux,
        xbox:FaXbox,
        nintendo:SiNintendo,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid,
        playstation:FaPlaystation

    }
  return (
    <HStack margin={2} >
      {platform.map((platform) => (
        <Icon key={platform.id}as={IconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
