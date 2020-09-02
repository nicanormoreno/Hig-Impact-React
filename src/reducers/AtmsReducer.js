import { ACTION_ATM } from '../actions/ActionTypes';

const initialState = {
atms_list: [],
atm_selected:{},
};

export default function appReducer(state = initialState, action) {
    console.log('reducer atm');
  switch (action.type) {
      case ACTION_ATM:
        return Object.assign({}, state, action.props);  
    default:
      return state;
  }
}
