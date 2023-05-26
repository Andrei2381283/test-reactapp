import { all } from "redux-saga/effects"
import { postsWatcher } from "./postsSaga"
import { photosWatcher } from "./photosSaga"

export function* rootWatcher() {
  yield all([postsWatcher(), photosWatcher()])
}