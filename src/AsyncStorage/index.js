import AsyncStorage from "@react-native-async-storage/async-storage";

//This is user unique id
export const keys={
    uuid:'uuid'
};

//store data to asyncStorage
const setAsyncStorage=async(key,item)=>{
    try {
        await AsyncStorage.setItem(key,item);
    } catch (error) {
        console.log(error)
    }
}

//get data from AsyncStorage
const  getAsyncStorage=async(key)=>{
    try {
        const value=await AsyncStorage.getItem(key);
        if(value){
            return value;
        }else{
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

const clearAsyncStorage=async()=>{
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(error);
    }
}

export {
    setAsyncStorage,
    getAsyncStorage,
    clearAsyncStorage
}