import React, { useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions, Image, Alert, SafeAreaView } from 'react-native'
import { ButtonComponent } from '../Component'
import * as Animatable from 'react-native-animatable';
import { HOMESCREEN, SIGNINSCREEN, SPLASHSCREEN, WELCOME, WELCOMESCREEN } from '../Constant/route';
import { getAsyncStorage, keys } from '../AsyncStorage';
import Logo from './Logo'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const redirect = setTimeout(async () => {
            await getAsyncStorage(keys.uuid)
                .then((uuid) => {
                    if (uuid) {
                        navigation.replace(HOMESCREEN)
                    } else {
                       navigation.replace(WELCOMESCREEN);
                    }
                })
                .catch((error) => {
                    navigation.replace(SIGNINSCREEN);
                })
        }, 3000)

        return () => clearTimeout(redirect);
    }, [navigation])



    return (
        <Logo />
    )


    // var uid=null ;
    // useEffect(async()=>{
    //     uid=await getAsyncStorage(keys.uuid)
    //     console.log(uid)
    // },)

    // return (
    //     <>
    //     {uid !=null ? (
    //         <View>
    //             {navigation.replace(HOMESCREEN)}
    //         </View>
    //     ) : (<View style={styles.container}>
    //         <View style={styles.header}>
    //             <Animatable.Image
    //                 animation="bounceIn"
    //                 duration={1500}
    //                 source={require('../../assets/logo.png')}
    //                 style={styles.logo}
    //                 resizeMode="stretch"
    //             />
    //         </View>
    //         <Animatable.View animation="fadeInUpBig" style={styles.footer}>
    //             <Text style={styles.title}>Stay connected with everyone!</Text>
    //             <Text style={styles.text}>Sign in with account</Text>
    //             <View style={styles.button}>
    //                 <ButtonComponent
    //                     title="Get Started"
    //                     onPress={() =>navigation.navigate(SIGNINSCREEN)}
    //                 />
    //             </View>
    //         </Animatable.View>
    //     </View>)}
    //     </>
    // )
}

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

export default SplashScreen


{/* <View style={styles.container}>
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
                        onPress={() =>navigation.navigate(SIGNINSCREEN)}
                    />
                </View>
            </Animatable.View>
        </View> */}