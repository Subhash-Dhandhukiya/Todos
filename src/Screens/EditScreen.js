import React, { useState } from 'react'
import { View, Text, StyleSheet, Keyboard } from 'react-native'
import { getAsyncStorage, keys } from '../AsyncStorage'
import { ButtonComponent, TextInputComponent } from '../Component'
import firestore from '@react-native-firebase/firestore'
import { HOMESCREEN } from '../Constant/route'

import {useDispatch} from 'react-redux'
import {LoadingStart,LoadingStop} from '../Redux/Action'

const AddTodos = ({ route, navigation }) => {

    const [Title, setTitle] = useState('');
    const [data, setData] = useState('');

    const { title, description, path } = route.params;
    const dispatch=useDispatch();

    const handleOnPress = async () => {
        Keyboard.dismiss();
        if (!Title) {
            alert("Title is Required");
        } else if (!data) {
            alert("Description is required");
        } else {
            dispatch(LoadingStart());
            try {
                const uid = await getAsyncStorage(keys.uuid);
                firestore()
                    .collection(uid)
                    .doc(path)
                    .update({
                        Title: Title,
                        Discription: data
                    })
                    .then(() => {
                        dispatch(LoadingStop());
                        setTitle('')
                        setData('')
                        navigation.navigate(HOMESCREEN);
                    })
            } catch (error) {
                dispatch(LoadingStop);
                alert(error);
            }
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={{ justifyContent: 'center', height: "100%", paddingLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>Edit Todo</Text>
                </View>
            </View>
            <View style={styles.break} />
            <View>
                <View style={{ marginTop: 50 }}>
                    <TextInputComponent
                        placeholder={title}
                        onChangeText={setTitle}
                        value={Title}
                    />

                    <TextInputComponent
                        placeholder={description}
                        onChangeText={setData}
                        value={data}
                    />

                    <View style={{ alignItems: 'center' }}>
                        <ButtonComponent
                            title="Save"
                            onPress={() => handleOnPress()}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AddTodos

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



