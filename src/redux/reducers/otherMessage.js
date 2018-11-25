import { SET_OTHERMESSAGE } from '../types/message';

const initState = {
  otherMessages: []
 }

 export default (state = initState, action) => {
  switch(action.type) {
      case SET_OTHERMESSAGE :
        return { ...state, otherMessages: [...state.otherMessages, action.payload.message]}
      default :
        return state
    }
 }