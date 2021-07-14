import React, { useState } from 'react'
import { View, Text, StyleSheet, Keyboard, Platform, TouchableOpacity, StatusBar } from 'react-native'
import * as Aimatable from 'react-native-animatable'
import { ButtonComponent, TextInputComponent } from '../Component'
import { loginRequest } from '../Network/index'
import { setAsyncStorage, keys } from '../AsyncStorage/index'
import { HOMESCREEN, SIGNUPSCREEN } from '../Constant/route'

import {LoadingStart,LoadingStop} from '../Redux/Action'
import {useDispatch} from 'react-redux'

const SignInScreen = ({ navigation }) => {

    const [data, setData] = useState({ email: '', password: '' })
    const dispatch=useDispatch();

    const textInputChange = (name, val) => {
        setData({
            ...data,
            [name]: val
        })
    }

    const handleSignIn = () => {
        Keyboard.dismiss();
        if (!data.email) {
            alert("Email is required");
        } else if (!data.password) {
            alert("Password is required");
        } else {
            
            dispatch(LoadingStart());
            loginRequest(data.email, data.password)
                .then((res) => {
                    if (res.user.emailVerified) {
                        if (res.additionalUserInfo == null) {
                            alert(res);
                            return;
                        }

                        setAsyncStorage(keys.uuid, res.user.uid);
                        dispatch(LoadingStop());
                        navigation.replace(HOMESCREEN);
                    }
                    else{
                        dispatch(LoadingStop());
                        alert("Please first Verify your Email");
                    }
                })
                .catch(error => {
                    dispatch(LoadingStop());
                    alert("Invalid email or password")
                })
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#39A2DB" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Aimatable.View animation="fadeInUpBig" style={styles.footer}>
                <TextInputComponent
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange("email", val)}
                />

                <TextInputComponent
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(val) => textInputChange("password", val)}
                />

                <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                    <ButtonComponent
                        title="Sign In"
                        onPress={() => handleSignIn()}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <Text>Don't have an account  </Text>
                        <TouchableOpacity onPress={() => navigation.navigate(SIGNUPSCREEN)}>
                            <Text style={{ color: '#39A2DB' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Aimatable.View>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#39A2DB'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


