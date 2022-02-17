import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const UPDATENICKNAME = "UPDATENICKNAME";
const UPDATEEMAIL = "UPDATEEMAIL";

const addInfo = (infoObj) => {
  return { type: ADD, infoObj };
};

const deleteInfo = () => {
  return { type: DELETE };
};

const modifyNickname = (newNickname) => {
  return { type: UPDATENICKNAME, newNickname };
};

const modifyEmail = (newEmail) => {
  return { type: UPDATEEMAIL, newEmail };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newUserInfo = [
        {
          seq: action.infoObj.seq,
          nickname: action.infoObj.nickname,
          token: action.infoObj.token,
          email: action.infoObj.email,
        },
        ...state,
      ];
      return newUserInfo;
    case DELETE:
      state.splice(0);
      return state;
    case UPDATENICKNAME:
      const updatedInfo = [...state];
      updatedInfo[0] = { ...state[0], nickname: action.newNickname };
      return updatedInfo;
    case UPDATEEMAIL:
      const updatedInfo2 = [...state];
      updatedInfo2[0] = { ...state[0], email: action.newEmail };
      return updatedInfo2;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addInfo,
  deleteInfo,
  modifyNickname,
  modifyEmail,
};

export default store;
