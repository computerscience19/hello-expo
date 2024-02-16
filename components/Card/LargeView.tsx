import { Dimensions, } from 'react-native';
import {  Center,Image, Text, VStack, } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import {Webtoon} from '../../types';

interface LargeViewProp {
  webtoon: Webtoon;
}

export default function LargeView( {webtoon} : LargeViewProp) {
  
  return (
    <VStack
      width={Dimensions.get('window').width} 
      height='100%' 
      justifyContent='flex-end'
      pl={10}
      pb={10}
    >

      <Image 
        bg='$backgroundDark900'
        position = 'absolute'
        alt='webtoon'
        size="full"
        source={{
          uri: webtoon.img
        }}
      />

      <Text size = 'lg' color='white' fontWeight='$bold' ml={30}>
        {webtoon.title}
      </Text>

      <Text size = 'lg' color='white' fontWeight='$bold' ml={30} mb={30}>
        {webtoon.author}
      </Text>
    </VStack>
  )
};

