import { ACTION_LOGIN, ACTION_LOGOUT } from './ActionTypes';
import AuthService from '../providers/AuthService';
import {Actions} from 'react-native-router-flux'

export const actionLogin = (username, password, callback) => {
    return disaptch =>{
         AuthService.loginService(username, password)
        .then(token => {
            disaptch({
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

export const actionLogout = () => {
    this.
    Actions.login();

}
