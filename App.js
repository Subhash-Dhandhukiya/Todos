import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import NavContainer from './src/Navigation'

const App = () => {
  return (
    <View style={styles.container}>
     <NavContainer/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})

export default App
