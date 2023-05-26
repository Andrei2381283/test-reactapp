export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface PhotoPayload {
  userId: number,
  url: string,
  thumbnailUrl: string
}

export interface Photo {
  url: string,
  thumbnailUrl: string
}

export interface PhotoFull {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface IPostsReducer {
  posts: Post[]
}

export interface IPhotosReducer {
  photos: {
    [k: number]: Photo
  }
}

export interface IState {
  postsReducer: IPostsReducer,
  photosReducer: IPhotosReducer
}

export interface IPostsFetchParams {
  _start: number | string,
  _limit: number | string
}

export interface IPhotosFetchParams {
  userId: number
}