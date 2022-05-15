import * as actions from "../../common/action_type";

export function login(n) {
    return {
      type: actions.LOGIN,
      amount: n
    }
  }
  
  export function logout(n) {
    return {
      type: actions.LOGOUT,
      amount: n
    }
  }