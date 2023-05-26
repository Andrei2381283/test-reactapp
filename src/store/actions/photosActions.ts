import { PhotoPayload } from "../../types";
import { ADD_PHOTO, FETCH_PHOTO } from "../../types/photosTypes";

export const addPhoto = (payload: PhotoPayload) => ({
  type: ADD_PHOTO,
  payload
});

export const fetchPhoto = (userId: number) => ({
  type: FETCH_PHOTO,
  payload: {
    userId
  }
});