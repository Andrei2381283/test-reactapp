import axios from "axios";
import { Post } from "../types";

export const getPosts = () => axios.get<Post[]>("/posts");