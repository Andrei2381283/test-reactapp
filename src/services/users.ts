import axios from "axios";
import { User } from "../types";

export const getUser = (userId: number) => axios.get<User>(`/users/${userId}`);