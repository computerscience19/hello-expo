import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.box1}><Text>안녕하세요 여러분</Text></View>
      <View style = {styles.box2}><Text>동아리장을 맡은 김준수입니다.</Text></View>
      <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection:'row',
  },

  box1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'pink',
  },

  box2: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },

});