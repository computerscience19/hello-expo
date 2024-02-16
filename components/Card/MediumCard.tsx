import { Dimensions, } from 'react-native';
import {  Center,Image, Text, VStack, StarIcon, HStack, Icon } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import {Webtoon} from '../../types';

interface MediumCardProp {
  webtoon: Webtoon;
}

export default function MediumCard( {webtoon} : MediumCardProp) {
  
  return (
    <HStack borderWidth= '$1' borderColor='gray' margin={5}>
      <Image
        bg = '$backgroundDark700'
        size = 'xl'
        alt='webtoon'
        source={{
          uri: webtoon.img,
        }}
      />
    <VStack justifyContent='center' pl="$7">
      <Text size = 'md' color='white' fontWeight='$bold' fontSize={13}>
        {webtoon.title}
      </Text>

      <Text size = 'md' color='white' fontWeight='$bold' fontSize={13}>
        {webtoon.author}
      </Text>
      <HStack gap = '$1'>
        <Icon as = {StarIcon} color = 'yellow' fill='yellow'></Icon>
        <Text size = 'md' color='white' fontWeight='$bold' >
            {webtoon.fancount}
        </Text>
      </HStack>
    </VStack>
    </HStack>
    
  );
}

