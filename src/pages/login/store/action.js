import {REMOVE_USER,STORE_USER} from "./types"


export const setUser=(user)=>{
    return{
        type:STORE_USER,
        payload:user
    }
}

export const removeUser =()=>{
    return{
        type:REMOVE_USER
    }
}