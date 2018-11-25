import { SET_OTHERMESSAGE } from "../types/message";
export const setOtherMessage = (message) => {
  return dispatch => {
    dispatch({
       type: SET_OTHERMESSAGE,
       payload: {
        othermessage
       }
    })
  }
}