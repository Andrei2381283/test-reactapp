import axios from "axios";
import { IPostsFetchParams, Post } from "../types";

export const getPosts = (params: IPostsFetchParams) => {
  return new Promise((res, rej) => {
    setTimeout(() => axios.get<Post[]>("/posts", { params }).then(res).catch(rej), 500);
  })
};