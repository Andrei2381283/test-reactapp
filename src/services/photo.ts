import axios from "axios";
import { PhotoFull } from "../types";

export const getUserPhoto = async (userId: number): Promise<PhotoFull> => {
  const albumRes = await axios.get(`/users/${userId}/albums`, { params: { _limit: 1 } });
  const photosRes = await axios.get(`/albums/${albumRes.data[0].id}/photos`, { params: { _limit: 1 } });
  return photosRes.data[0];
};