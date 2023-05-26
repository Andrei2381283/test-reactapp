export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostsReducer {
    posts: Array
}

export interface IState {
    postsReducer: IPostsReducer
}

export interface IFetchParams {
    _start: number | string,
    _limit: number | string
}