import {
  SUBMIT_INFO_FORM_FAIL,
  SUBMIT_INFO_FORM_SUCCESS,
} from './types';


const INIT_STATE = {
  auth: false
};

export default (
  state = INIT_STATE,
  action
) => {
  switch (action.type) {
    case SUBMIT_INFO_FORM_FAIL:
      console.log(action.payload);
      return state;
    case SUBMIT_INFO_FORM_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
