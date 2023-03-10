import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Go to Settings' onPress={()=>{navigation.navigate('Settings')}}  />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  
})