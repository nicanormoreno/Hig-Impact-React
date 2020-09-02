import {ACTION_ATM} from './ActionTypes';
import AtmsService from '../providers/AtmsService';

export const actionGetAtms = (sesstion_token) => {
    return dispatch => {
        AtmsService.getAtms(sesstion_token).then( collection =>{
            let atms =[]
            collection.map((atm, index)=>{
                atm.index = index;
                atms.push(atm)
            })
            dispatch({
                type:ACTION_ATM,
                props:{atms_list: atms }
            })
        })
    }
}

export const actionAtmDetail = (atm, callback) => {
    console.log('atm detail', atm)
    return dispatch => {
        dispatch({
            type: ACTION_ATM,
            props: { atm_selected: atm }
        });
        callback && callback();
    }
}

export const actionEditAtm = (atm, atms_list, callback) => {
    console.log('atm edit', atm)
    return dispatch => {
        dispatch({
            type: ACTION_ATM,
        })
    }
}

export const actionSearchAtms = (search, filter, session_token) =>{
    return dispatch => {
        AtmsService.searchAtm(search, filter, session_token)
            .then(collection => {
                let atms = []
                collection.map((atm, index)=>{
                    atm.index = index;
                    atms.push(atm);
                })
                console.log(atms)
            dispatch({
                type:ACTION_ATM,
                props:{
                    atms_list: atms
                }
            });
        })
    }
}

