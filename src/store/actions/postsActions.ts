import { Post } from "../../types";
import { CLEAR_POSTS, FETCH_POSTS, SET_POSTS } from "../../types/postsTypes";

export const setPosts = (payload: Post[]) => ({
  type: SET_POSTS,
  payload
});

export const fetchPosts = (page: number) => ({
  type: FETCH_POSTS,
  payload: {
    _start: Number(process.env.REACT_APP_PAGE_SIZE) * page,
    _limit: Number(process.env.REACT_APP_PAGE_SIZE)
  }
});

export const clearPosts = () => ({
  type: CLEAR_POSTS
});