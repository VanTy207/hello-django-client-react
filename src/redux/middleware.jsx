import { REGISTER, LOGIN, LOGOUT } from "../common/action_type";

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === REGISTER || action.type === LOGIN) {
    if (!action.error) {
      window.localStorage.setItem("jwt", action.payload.user.token);
    }
  } else if (action.type === LOGOUT) {
    window.localStorage.setItem("jwt", "");
  }

  next(action);
};

export { localStorageMiddleware };
