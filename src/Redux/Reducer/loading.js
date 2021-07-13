import React from 'react'

const initialState=false;

const changeLoading=(state=initialState,action)=>{
    switch(action.type){
        case true: return true;
        case false: return false;
        default : return false;
    }
}

export default changeLoading;