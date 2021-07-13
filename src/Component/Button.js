import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonComponent = ({ title, onPress,backgroundColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 50,
        borderRadius:100,
        backgroundColor:'#39A2DB',
    },
    view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:17,

    }
})

export default ButtonComponent;