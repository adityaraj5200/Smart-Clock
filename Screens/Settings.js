import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Settings = ({navigation}) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title='Go back to Home' onPress={() => { navigation.navigate('Home') }} />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  
})