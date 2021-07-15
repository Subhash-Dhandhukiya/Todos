import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { ADDTODOS, EDITSCREEN, SHOWDATASCREEN, SIGNINSCREEN } from '../Constant/route';
import firestore from '@react-native-firebase/firestore';
import { getAsyncStorage, keys, clearAsyncStorage } from '../AsyncStorage/index'
import { DeleteIcon, EditIcon, LogoutIcon } from '../../assets/Icon'
import { logoutRequest } from '../Network'
import * as Animatable from 'react-native-animatable'

import { useDispatch } from 'react-redux'
import { LoadingStart, LoadingStop } from '../Redux/Action'

const HomeScreen = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [totalTodos, setTotalTodos] = useState('');
    const dispatch = useDispatch();

    useEffect(async () => {
        try {
            const id = await getAsyncStorage(keys.uuid);
            firestore()
                .collection(id)
                .get()
                .then(querySnapshot => {
                    setTotalTodos(querySnapshot.size);
                    setData(querySnapshot._docs);
                })
        } catch (error) {
            alert(error);
        }
    }, [data])

    const navigationScreen = (title, description, path) => {
        navigation.navigate(SHOWDATASCREEN, {
            title,
            description,
            path
        })
    }

    const HandleEditIcon = (title, description, path) => {
        navigation.navigate(EDITSCREEN, {
            title,
            description,
            path
        })
    }


    const HandleDeleteIcon = async (path) => {
        const id = await getAsyncStorage(keys.uuid);
        Alert.alert(
            "Delete",
            "Are you sure to delete todo",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK", onPress: () => firestore().collection(id).doc(path).delete().then(() => alert('Deleted')) }
            ]
        );

    }


    const handleLogout = () => {

        Alert.alert(
            "Logout",
            "Are you sure to Logout",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        try {
                            dispatch(LoadingStart())
                            logoutRequest()
                                .then(() => {
                                    dispatch(LoadingStop())
                                    navigation.replace(SIGNINSCREEN);
                                    clearAsyncStorage();
                                })
                            dispatch(LoadingStop());
                        } catch (error) {
                            dispatch(LoadingStop())
                            
                        }
                    }
                }
            ]
        );


    }


    const renderItem = ({ item }) => {

        const title = item._data.Title
        const description = item._data.Discription

        //PATH
        const path = item._ref._documentPath._parts[1];

        return (
            <>
                <Animatable.View 
                    animation="zoomIn"
                    duration={1000}
                    style={{ flexDirection: 'row', height: 60 }}
                >
                    <TouchableOpacity onPress={() => navigationScreen(title, description, path)} style={{ width: '80%', justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={{ fontSize: 18, color: "#000", letterSpacing: 0.7 }}>{title}</Text>
                        <Text style={{ fontSize: 14, color: "gray", letterSpacing: 0.5, width: "95%" }} numberOfLines={1}>{description}</Text>
                    </TouchableOpacity>
                    <View style={{ width: '20%', flexDirection: 'row' }}>
                        <View style={{ height: '100%', justifyContent: 'center', width: "50%", alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => HandleEditIcon(title, description, path)}>
                                <EditIcon
                                    fill="black"
                                    height={20}
                                    width={20}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: '100%', justifyContent: 'center', width: "50%" }}>
                            <TouchableOpacity style={{ right: 5 }} onPress={() => HandleDeleteIcon(path)}>
                                <DeleteIcon
                                    fill="red"
                                    height={20}
                                    width={20}
                                    style={{ right: -15 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
                <View style={{ height: 1, backgroundColor: '#E1E5EA' }} />
            </>
        );
    }

    return (
        <>
            <View style={styles.header}>
                <View style={{ height: "100%", alignItems: 'center', justifyContent: 'center', paddingLeft: 20 }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", color: '#39A2DB' }}>Todos</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => handleLogout()}
                >
                    <LogoutIcon
                        fill="black"
                        height={20}
                        width={20}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.break} />
            <View style={{ backgroundColor: '#fff', height: 30, justifyContent: 'center', paddingLeft: 20 }}>
                <Text style={{ fontSize: 15, color: 'grey' }}>Total Todos : {totalTodos}</Text>
            </View>

            <View style={{ marginTop: 10 }} />
            {data.length > 0 ? (
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => renderItem({ item })}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={{ fontSize: 30, color: 'gray', fontWeight: '400' }}>No Todos</Text>
                </View>
            )}

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate(ADDTODOS)}
            >
                <Text style={{ fontSize: 37, color: 'white', top: -2 }}>+</Text>
            </TouchableOpacity>

        </>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 20,
        color: 'gray'
    },
    header: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    buttonStyle: {
        height: "100%",
        justifyContent: 'center',
        paddingRight: 15,
    },
    button: {
        backgroundColor: '#39A2DB',
        height: 38,
        width: 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingRight: 8
    },
    break: {
        height: 1,
        backgroundColor: "gray"
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#39A2DB',
        bottom: 15,
        right: 15,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
