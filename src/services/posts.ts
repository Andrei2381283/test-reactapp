import axios from "axios";
import { IPostsFetchParams, Post } from "../types";

export const getPosts = () => axios.get<Post[]>("/posts");