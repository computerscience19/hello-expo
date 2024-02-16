import { Dimensions, } from 'react-native';
import {  Center,Image, Text, VStack, } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import {useEffect} from 'react';
import { useQuery } from '@tanstack/react-query';
import {Webtoon} from '../types';
import LargeView from './Card/LargeView';

interface WebtoonResponse {
  webtoons: Webtoon[];
}

const fetchWebtoons = async() => {
  const res = await fetch("https://korea-webtoon-api.herokuapp.com"	);
  return res.json();
}

export default function MySwiper() {
 
  const {data} = useQuery<WebtoonResponse>({
    queryKey: ["https://korea-webtoon-api.herokuapp.com"],
    queryFn: fetchWebtoons,
  });
  

  return (
      <Swiper>
        {data.webtoons.map((webtoon) => <LargeView webtoon = {webtoon}/>)}
      </Swiper>
   
    );
}

