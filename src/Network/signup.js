import firebase from '../Firebase/config'

const signuprequest=async(email,password)=>{
    try {
        return await firebase.auth().createUserWithEmailAndPassword(email,password);
    } catch (error) {
        return error;
    }
}

export default signuprequest;