import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { ButtonComponent } from '../Component'
import { SIGNINSCREEN } from '../Constant/route'

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.title}>Stay connected with everyone!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <ButtonComponent
                        title="Get Started"
                        onPress={() => navigation.navigate(SIGNINSCREEN)}
                    />
                </View>
            </Animatable.View>
        </View>
    )
}

export default WelcomeScreen

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#39A2DB',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});