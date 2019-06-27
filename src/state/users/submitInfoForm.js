import {
  SUBMIT_INFO_FORM_FAIL,
  SUBMIT_INFO_FORM_PENDING,
  SUBMIT_INFO_FORM_SUCCESS
} from './types';

export default (payload

) => async dispatch => {
        dispatch({
          type: SUBMIT_INFO_FORM_PENDING
        });

        try {
          dispatch({
            type: SUBMIT_INFO_FORM_SUCCESS,
            payload
          });
        } catch (e) {
          dispatch({
            type: SUBMIT_INFO_FORM_FAIL,
            payload: e
          });
        }
      };
