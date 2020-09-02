import {ACTION_ATM, ACTION_LOADING} from './ActionTypes';
import AtmsService from '../providers/AtmsService';

export const actionGetAtms = (sesstion_token) => {
    return dispatch => {
        dispatch({
            type:ACTION_LOADING,
            props:{ loading:true}
        })
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
            dispatch({
                type:ACTION_LOADING,
                props:{ loading:false}
            })
        })
    }
}

export const actionAtmDetail = (atm, callback) => {
    return dispatch => {
        dispatch({
            type: ACTION_ATM,
            props: { atm_selected: atm }
        });
        callback && callback();
    }
}

export const actionEditAtm = (atm, atms_list, callback) => {
    return dispatch => {
        dispatch({
            type: ACTION_ATM,
        })
    }
}

export const actionSearchAtms = (search, filter, session_token) =>{
    return dispatch => {
        dispatch({
            type:ACTION_LOADING,
            props:{ loading:true}
        })
        AtmsService.searchAtm(search, filter, session_token)
            .then(collection => {
                let atms = []
                collection.map((atm, index)=>{
                    atm.index = index;
                    atms.push(atm);
                })
            dispatch({
                type:ACTION_ATM,
                props:{
                    atms_list: atms
                }
            });
            dispatch({
                type:ACTION_LOADING,
                props:{ loading:false}
            })
        })
    }
}

