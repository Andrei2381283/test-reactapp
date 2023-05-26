import axios from "axios";
import { IFetchParams, Post } from "../types";

export const getPosts = (params: IFetchParams) => axios.get<Post[]>("/posts", { params });