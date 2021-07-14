import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ADDTODOS, EDITSCREEN, HOMESCREEN, LOGO, SHOWDATASCREEN, SIGNINSCREEN, SIGNUPSCREEN, SPLASHSCREEN, WELCOME, WELCOMESCREEN } from '../Constant/route'

//Screens
import SignUpScreen from '../Screens/SignUpScreen'
import SignInScreen from '../Screens/SignInScreen'
import SplashScreen from '../Screens/SplashScreen'
import HomeScreen from '../Screens/HomeScreen'
import AddTodos from '../Screens/AddTodos'
import ShowDataScreen from '../Screens/ShowDataScreen'
import EditScreen from '../Screens/EditScreen'
import Logo from '../Screens/Logo'
import WelcomeScreen from '../Screens/WelcomeScreen'


const Stack = createStackNavigator();

const NavContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SignInScreen}>
                <Stack.Screen
                    name={SPLASHSCREEN}
                    component={SplashScreen}
                    options={{ headerShown: null }}
                />

                <Stack.Screen
                    name={SIGNINSCREEN}
                    component={SignInScreen}
                    options={{ headerShown: null }}
                />

                <Stack.Screen
                    name={SIGNUPSCREEN}
                    component={SignUpScreen}
                    options={{ headerShown: null }}
                />

                <Stack.Screen
                    name={HOMESCREEN}
                    component={HomeScreen}
                    options={{ headerShown: null }}
                />

                <Stack.Screen
                    name={ADDTODOS}
                    component={AddTodos}
                    options={{ headerShown: null }}
                />

                <Stack.Screen
                    name={SHOWDATASCREEN}
                    component={ShowDataScreen}
                    options={{ headerShown: null }}
                />

                <Stack.Screen
                    name={EDITSCREEN}
                    component={EditScreen}
                    options={{ headerShown: null }}
                />

                <Stack.Screen
                    name={LOGO}
                    component={Logo}
                    options={{ headerShown: null }}
                />

                <Stack.Screen
                    name={WELCOMESCREEN}
                    component={WelcomeScreen}
                    options={{ headerShown: null }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavContainer;