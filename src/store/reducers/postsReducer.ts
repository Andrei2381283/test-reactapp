import { AnyAction } from "redux"
import { CLEAR_POSTS, SET_POSTS } from "../../types/postsTypes"

const defaultState = {
    posts: []
}

export default function postsReducer(state = defaultState, action: AnyAction) {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload }
        case CLEAR_POSTS:
            return { ...state, posts: [] }
    }
    return state;
}