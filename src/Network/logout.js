import firebase from '../Firebase/config'

const LogoutUser=async()=>{
    try {
        return firebase.auth().signOut();
    } catch (error) {
        return error;
    }
}

export default LogoutUser;