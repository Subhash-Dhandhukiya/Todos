import React, { useState,useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity, StatusBar } from 'react-native'
import * as Aimatable from 'react-native-animatable'
import { ButtonComponent, TextInputComponent } from '../Component'
import {signupRequest} from '../Network'
import LogoutUser from '../Network/logout'
import {SIGNINSCREEN} from '../Constant/route'


import {useDispatch} from 'react-redux'
import {LoadingStart,LoadingStop} from '../Redux/Action'

const SignInScreen = ({ navigation }) => {

    const [data, setData] = useState({ email: '', password: '', confirmPassword: '',name:'' })
    const dispatch=useDispatch();

    const textInputChange = (name, val) => {
        setData({
            ...data,
            [name]: val
        })
    }



    const handleSignUp = async() => {
        if(!data.name){
            alert("Name is required");
        }else if (!data.email) {
            alert("Email is required");
        } else if (!data.password) {
            alert("Password is required");
        } else if (data.password !== data.confirmPassword) {
            alert("password does not match")
        } else {
            dispatch(LoadingStart());
            signupRequest(data.email,data.password)
                .then((res)=>{
                    if(res.additionalUserInfo==null){
                        alert(res);
                        return;
                    }   
                    // (res);
                    res.user.sendEmailVerification()
                    dispatch(LoadingStop());
                    alert("Verify Email to Login ")
                    LogoutUser();
                    navigation.navigate(SIGNINSCREEN);
                })
                .catch((error)=>{
                    dispatch(LoadingStop);
                    alert(error)
                })
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#39A2DB" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Aimatable.View animation="fadeInUpBig" style={styles.footer}>
                <TextInputComponent
                    placeholder="Name"
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange("name", val)}
                />

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

                <TextInputComponent
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(val) => textInputChange("confirmPassword", val)}
                />

                <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                    <ButtonComponent
                        title="Sign Un"
                        onPress={() => handleSignUp()}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <Text>Do you have an account  </Text>
                        <TouchableOpacity onPress={() => navigation.navigate(SIGNINSCREEN)}>
                            <Text style={{ color: '#39A2DB' }}>Sign In</Text>
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
});
