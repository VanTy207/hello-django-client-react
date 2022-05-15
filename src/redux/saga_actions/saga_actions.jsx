import { call, put } from "redux-saga/effects";
import * as actions from "../../common/action_type";

export function* searchLandFilter(action) {
  try {
    // const req = yield call(API.searchLand, action.payload.params);
    // yield put({ type: "FETCH_LANDS_FILTER_SUCCESS", payload: req });
  } catch (error) {
    yield put({ type: "FETCH_LANDS_FILTER_FAIL", payload: error });
  }
}
