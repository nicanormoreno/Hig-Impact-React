import { ACTION_LOADING,ACTION_LOGIN } from './ActionTypes';
import AuthService from '../providers/AuthService';
import {Actions} from 'react-native-router-flux'

export const actionLogin = (username, password, callback) => {
    return dispatch =>{
         AuthService.loginService(username, password)
        .then(token => {
            dispatch({
                type: ACTION_LOGIN,
                props:{
                    session_token: token,
                    username:username,
                }
            })
            callback(token);
        }).catch(error => {
             callback && callback()
        })
    }
}

export const actionLoading = (loading) => {
    return dispatch=>{
        dispatch({
            type: ACTION_LOADING,
            props: {loading}
        })
    }
}

export const actionLogout = () => {
    this.
    Actions.login();

}
