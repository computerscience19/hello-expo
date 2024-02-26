import { StyleSheet,  Dimensions, } from 'react-native';
import { SafeAreaView, Box, Center, GluestackUIProvider, Image, ScrollView, Text, VStack, View } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import MySwiper from "./components/MySwiper";
import LargeView from "./components/Card/LargeView";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import MediumCard from "./components/Card/MediumCard";
import AppScreen from './screens/AppScreen';
import CounterScreen from './screens/CounterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreensParams } from './types';
import { StatusBar } from 'expo-status-bar';


const Stack = createStackNavigator<ScreensParams>();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <SafeAreaView flex={1} bg='$backgroundDark950'>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name='Counter'
                component={CounterScreen}
                options={{ header: () => null }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}

