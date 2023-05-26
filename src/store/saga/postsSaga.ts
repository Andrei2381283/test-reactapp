import { put, takeEvery, call } from "redux-saga/effects"
import { AxiosResponse } from "axios";
import { getPosts } from "../../services/posts"
import { setPosts } from "../actions/postsActions"
import { FETCH_POSTS } from "../../types/postsTypes";
import { IPostsFetchParams, Post } from "../../types"

function* fetchPostsWorker({ payload }: { payload: IPostsFetchParams, type: string }) {
  try {
    yield put(setPosts([]));
    const res: AxiosResponse<Post[], any> = yield call(getPosts, payload);
    yield put(setPosts(res.data));
  } catch (err) {
    console.error(err);
    yield put(setPosts([]));
  }
}

export function* postsWatcher() {
  yield takeEvery(FETCH_POSTS, fetchPostsWorker)
}