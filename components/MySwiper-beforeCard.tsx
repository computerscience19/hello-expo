import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleMinus = () => {
    setNumber(number - 1);
  };

  const handlePlus = () => {
    setNumber(number + 1);
  };

  return (
    <View style = {styles.container}>
      <View style = {styles.container1}><Text style = {styles.title}>This is my Counter</Text></View>
      <View style = {styles.container2}>
        <Text style = {styles.numberbox}>
          {number}
        </Text>
      </View>
      <View style = {styles.container3}>
        <TouchableOpacity style = {styles.plus} onPress={handlePlus} disabled={number === 10}>
          <Text style = {styles.buttontext}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.minus} onPress={handleMinus} disabled={number === 0}>
          <Text style = {styles.buttontext}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberbox:{
    fontSize:100,
    fontWeight:'900',
    color:'green',
  },

  title:{
    fontSize:30,
    fontWeight:'900',
  },

  plus:{
    backgroundColor:'yellow',
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 40,
  },

  minus:{
    backgroundColor:'red',
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 40,
  },

  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttontext:{
    color:'white',
    fontSize:40,
    fontWeight:'900',
    
  },
  
  container3: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});
