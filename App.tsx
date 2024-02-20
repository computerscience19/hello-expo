
import { SafeAreaView,GluestackUIProvider, } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import ScreenOne from './screens/ScreenOne';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';
import { RootStackParamList } from './types';
import { StatusBar } from '@gluestack-ui/themed';
import WebtoonScreen from './screens/WebtoonScreen';

const Stack = createStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

export default function App() {
  
  return (
    <QueryClientProvider client = {queryClient}>
      <GluestackUIProvider config={config}>
        <StatusBar barStyle = 'light-content' />
          <SafeAreaView flex={1} bg='$backgroundDark950'>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name='One' component={ScreenOne} options={{
                  header: () =>null
                }}/>
                <Stack.Screen name='Two' component={ScreenTwo} options={{
                  header: () =>null
                }}/>
                <Stack.Screen name='Three' component={ScreenThree} options={{
                  header: () =>null
                }}/>
                <Stack.Screen name='webtoon' component={WebtoonScreen} options={{
                  header: () =>null
                }}/>
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
          
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}

