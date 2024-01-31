import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      
      <View style={styles.container1}>
        <View style={styles.item1}/>
        <View style={styles.item2}/>
        <View style={styles.item3}/>
        <View style={styles.item4}/>
      </View>

      <View style={styles.box3}/>
      <View style={styles.box4}/>  
   
      <StatusBar style="auto" />
    </SafeAreaView>
 
  );
}
const styles = StyleSheet.create({

  container: {
    flex:1,

  },
  
  box1: {
    flex:1,
    backgroundColor:'blue',
    borderWidth: 10,
    borderColor: "red",
  },
  box2: {
    flex:2,
    backgroundColor:'green',
  },

  container1: {
    flex:3,
    backgroundColor:'gray',
    flexDirection: 'row',
    gap:10,
    
  },

  item1: {
    flex:1,
    backgroundColor:'#F6BB43',
  },

  item2: {
    flex:2,
    backgroundColor:'#D0FC5C',
  },

  item3: {
    flex:2,
    backgroundColor:'#F6BB43',
  },

  item4: {
    flex:1,
    backgroundColor:'#81C747',
  },

  box3:{
    flex: 2,
    backgroundColor: "pink",
  },

  box4:{
    flex:1,
    backgroundColor: '#81C747',
  }
 
});