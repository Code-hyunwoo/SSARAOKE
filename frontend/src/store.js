import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addInfo = (infoObj) => {
  return { type: ADD, infoObj };
};

const deleteInfo = (seq) => {
  return { type: DELETE, seq };
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
      const restInfo = state.filter((user) => user.seq !== action.seq);
      return restInfo;
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
