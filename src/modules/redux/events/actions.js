import actionType from './actionType';

export const saveState = (data) => {
  return {
    type: actionType.SAVE_STATE,
    payload: data
  }
}
export const resetState = () => {
  return {
    type: actionType.SAVE_STATE,
    payload: null
  }
}