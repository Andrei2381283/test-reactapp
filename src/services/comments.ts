import axios from "axios";
import { Comment } from "../types";

export const getCommentsFor = (postId: number) => axios.get<Comment[]>(`/posts/${postId}/comments`);