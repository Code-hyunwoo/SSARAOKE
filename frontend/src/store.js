import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addInfo = (infoObj) => {
  return { type: ADD, infoObj };
};

const deleteInfo = () => {
  return { type: DELETE };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newUserInfo = [
        {
          seq: action.infoObj.seq,
          nickname: action.infoObj.nickname,
          token: action.infoObj.token,
        },
        ...state,
      ];
      console.log(newUserInfo);
      return newUserInfo;
    case DELETE:
      state.splice(0);
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addInfo,
  deleteInfo,
};

export default store;
