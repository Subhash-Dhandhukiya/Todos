import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'

const Logo = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Animatable.View
                animation="bounceIn"
                duration={3000}
            >
                <Image
                    animation="bounceIn"
                    duration={3000}
                    source={require('../../assets/MainLogo.png')}
                    resizeMode="cover"
                    style={{
                        height: 350,
                        width: 350
                    }}
                />
            </Animatable.View>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})