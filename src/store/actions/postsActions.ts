import { Post } from "../../types";
import { FETCH_POSTS, SET_POSTS } from "../../types/postsTypes";

export const setPosts = (payload: Array<Post>) => ({
    type: SET_POSTS,
    payload
});

export const fetchPosts = () => ({
    type: FETCH_POSTS
});