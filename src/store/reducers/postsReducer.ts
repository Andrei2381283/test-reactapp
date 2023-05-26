import { AnyAction } from "redux"
import { SET_POSTS } from "../../types/postsTypes"

const defaultState = {
    posts: []
}

export default function postsReducer(state = defaultState, action: AnyAction) {
    switch(action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload}
    }
    return state;
}