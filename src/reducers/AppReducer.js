import { CHANGE_APP_PROPS, ACTION_LOGIN, ACTION_LOADING } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  forceUpdate: false,
  suggestUpdate: false,
  modalMsg: '',
  modalButtonCancel: { text: '', action: null },
  modalButtonOk: { text: '', action: null },
  screen: { action: 'home', index: 1 },
  session_token: null,
  username: '',
  loading:false,
};

export default function atmsReducer(state = initialState, action) {
  switch (action.type) {
    // case CHANGE_APP_PROPS:
    //   return { ...state, ...action.props };
      case ACTION_LOGIN:
        return Object.assign({}, state, action.props);
      case ACTION_LOADING:
        return   Object.assign({}, state, action.props);
    //   case SUCCESS_LOGIN:
    //     return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
}
