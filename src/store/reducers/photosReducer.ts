import { AnyAction } from "redux"
import { ADD_PHOTO } from "../../types/photosTypes"

const defaultState = {
  photos: {}
}

export default function photosReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case ADD_PHOTO:
      return { ...state, photos: {...state.photos, [action.payload.userId] : { url: action.payload.url, thumbnailUrl: action.payload.thumbnailUrl}} }
  }
  return state;
}