import { SET_MESSAGE } from '../types/message';

const initState = [];

 export default (state = initState, action) => {
  switch(action.type) {
      case SET_MESSAGE :
        return [...state, action.payload.message]
      default :
        return state
    }
 }