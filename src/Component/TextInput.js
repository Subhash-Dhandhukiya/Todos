import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextInputComponent = ({ placeholder, onChangeText, numberOfLines,value,secureTextEntry,autoCapitalize }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={styles.txt}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                numberOfLines={numberOfLines}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"90%",
        marginLeft:20,
        marginBottom:18
    },
    txt:{
        borderWidth:1,
        borderColor:'#39A2DB',
        borderTopLeftRadius:18,
        borderBottomRightRadius:18,
        borderTopRightRadius:18,
        borderBottomLeftRadius:18,
        paddingLeft:18,
        color:'#053742'
    }
})

export default TextInputComponent;