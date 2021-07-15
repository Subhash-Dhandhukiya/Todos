import React, { useState } from 'react'
import { View, Text, StyleSheet, Keyboard } from 'react-native'
import { getAsyncStorage, keys } from '../AsyncStorage'
import { ButtonComponent, TextInputComponent } from '../Component'
import firestore from '@react-native-firebase/firestore'

import { useDispatch, useSelector } from 'react-redux'
import { LoadingStart, LoadingStop } from '../Redux/Action'

const AddTodos = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [data, setData] = useState('');

    const dispatch = useDispatch();


    const handleOnPress = async () => {
        Keyboard.dismiss();
        dispatch(LoadingStart());
        try {
            const uid = await getAsyncStorage(keys.uuid);

            firestore()
                .collection(uid)
                .add({
                    Title: title,
                    Discription: data
                })
                .then(() => {
                    setData('');
                    setTitle('');
                    dispatch(LoadingStop());
                    navigation.goBack()
                });
        } catch (error) {
            dispatch(LoadingStop())
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={{ justifyContent: 'center', height: "100%", paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>Add Todo</Text>
                </View>
            </View>
            <View style={styles.break} />
            <View>
                <View style={{ marginTop: 50 }}>
                    <TextInputComponent
                        placeholder="Title"
                        onChangeText={setTitle}
                        value={title}
                    />

                    <TextInputComponent
                        placeholder="Description"
                        onChangeText={setData}
                        value={data}
                        multiline={true}
                        numberOfLines={12}
                        textAlignVertical="top"
                    />

                    <View style={{ alignItems: 'center' }}>
                        <ButtonComponent
                            title="Add"
                            onPress={() => handleOnPress()}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AddTodos;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        height: 50,
    },
    break: {
        height: 1,
        backgroundColor: 'gray',
    }
})



