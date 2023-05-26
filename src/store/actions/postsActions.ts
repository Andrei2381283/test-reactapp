import { Post } from "../../types";
import { CLEAR_POSTS, FETCH_POSTS, SET_POSTS } from "../../types/postsTypes";

export const setPosts = (payload: Post[]) => ({
  type: SET_POSTS,
  payload
});

export const fetchPosts = () => ({
  type: FETCH_POSTS
});

export const clearPosts = () => ({
  type: CLEAR_POSTS
});