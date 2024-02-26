import { StyleSheet, SafeAreaView, Dimensions, } from 'react-native';
import { Box, Center, GluestackUIProvider, Image, ScrollView, Text, VStack, View } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import MySwiper from "./components/MySwiper";
import LargeView from "./components/Card/LargeView";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import MediumCard from "./components/Card/MediumCard";
import AppScreen from './screens/AppScreen';
import CounterScreen from './screens/CounterScreen';



const queryClient = new QueryClient();

export default function App() {
  
  return (
    
    <CounterScreen />

      
  );
}

