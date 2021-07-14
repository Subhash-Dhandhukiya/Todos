import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavContainer from './src/Navigation'
import Loader from './src/Component/Loader'

import {useSelector,useDispatch} from 'react-redux'
import {LoadingStart,LoadingStop} from './src/Redux/Action'

const App = () => {

  return (
      <View style={styles.container}>
        <NavContainer />
        <Loader/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
