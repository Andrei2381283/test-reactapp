import { put, takeEvery, call } from "redux-saga/effects"
import { IPhotosFetchParams, PhotoFull } from "../../types"
import { getUserPhoto } from "../../services/photo";
import { addPhoto } from "../actions/photosActions";
import { FETCH_PHOTO } from "../../types/photosTypes";

function* fetchPhotoWorker({ payload }: { payload: IPhotosFetchParams, type: string }) {
  try {
    const photo: PhotoFull = yield call(getUserPhoto, payload.userId);
    yield put(addPhoto({ userId: payload.userId, url: photo.url, thumbnailUrl: photo.thumbnailUrl }));
  } catch (err) {
    console.error(err);
  }
}

export function* photosWatcher() {
  yield takeEvery(FETCH_PHOTO, fetchPhotoWorker)
}