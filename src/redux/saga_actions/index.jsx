import { all, takeLatest } from 'redux-saga/effects';
import * as saga from "../saga_actions/saga_actions";
import * as actions from "../../common/action_type";


export default function* rootSaga() {
    yield all([
      takeLatest(actions.LOGIN,saga.searchLandFilter),
    ]);
}