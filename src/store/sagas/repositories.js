import { call, put } from "redux-saga/effects";

import api from "../../services/api";
import { Creators as RepositoriesActions } from "../ducks/repositories";

export function* getRepositories() {
  try {
    const response = yield call(api.get, "users/delapria/repos");

    yield put(RepositoriesActions.getSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.getFailure());
  }
}
