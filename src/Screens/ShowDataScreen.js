import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Alert } from 'react-native'
import { getAsyncStorage, keys } from '../AsyncStorage';
import { EDITSCREEN } from '../Constant/route';
import firestore from '@react-native-firebase/firestore';

const ShowDataScreen = ({ route, navigation }) => {

    const { title, description , path} = route.params;

    const navigationScreen=()=>{
        navigation.navigate(EDITSCREEN,{
            title,
            description,
            path
        })
    }

    const HandleDeleteIcon=async(path)=>{

        const id = await getAsyncStorage(keys.uuid);

        Alert.alert(
            "Delete",
            "Are sure to delete todo",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", 
                onPress: () => firestore()
                                .collection(id)
                                .doc(path)
                                .delete()
                                .then(()=>{
                                    alert('Deleted')
                                    navigation.goBack()
                                }) }
            ]
          );
      
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Todo</Text>
            </View>
            <View style={{ height: 1, backgroundColor: 'grey' }} />

            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ paddingLeft: 10, fontSize: 23, letterSpacing: 1 ,color:'gray'}}>Title </Text>
                    <Text style={{paddingLeft:30,letterSpacing:0.5}}>{title}</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{ paddingLeft: 10, fontSize: 23, letterSpacing: 1 ,color:'gray'}}>Description</Text>
                    <Text style={{paddingLeft:30,marginTop:10,letterSpacing:0.5}}>{description}</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',bottom:10,alignItems:'center',justifyContent:'space-around'}}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>navigationScreen()}
                >
                    <View style={styles.btn}>
                    <Text style={styles.txt}>Edit</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={[styles.button]}
                    onPress={()=>HandleDeleteIcon(path)}
                >
                    <View style={styles.btn}>
                    <Text style={styles.txt}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 50,
        width: "100%",
        justifyContent: 'center',
        paddingLeft: 25
    },
    text: {
        fontSize: 20,
        letterSpacing: 0.5
    },
    button:{
        borderWidth:1,
        borderColor:'#39A2DB',
        width:"40%",
        height:45,
        borderRadius:20
    },
    btn:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    txt:{
        fontSize:18,
        color:'black'
    }
})

export default ShowDataScreen
