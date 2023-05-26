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