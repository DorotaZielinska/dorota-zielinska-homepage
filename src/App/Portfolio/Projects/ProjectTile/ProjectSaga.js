import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsSuccess,
} from "./ProjectSlice";
import { getGitHubData } from "./getDataProjects";

function* handleWatchFetchProjects() {
  try {
    yield delay(2000);
    const projects = yield call(getGitHubData);
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsError);
  }
}

export function* watchFetchProjects() {
  yield takeEvery(fetchProjects.type, handleWatchFetchProjects);
}
