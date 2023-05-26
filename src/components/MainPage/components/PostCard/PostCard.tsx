import { useDispatch, useSelector } from "react-redux";
import { IState, Post } from "../../../../types";
import { useEffect } from "react";
import { fetchPhoto } from "../../../../store/actions/photosActions";
import Loading from "../../../Loading/Loading";

export default function PostCard({ post }: { post: Post }) {
  
  const dispatch = useDispatch();
  const photo = useSelector((state: IState) => state.photosReducer.photos[post.userId]);

  useEffect(() => {
    if(!photo) {
      console.log(photo);
      dispatch(fetchPhoto(post.userId));
    }
  }, [photo])

  return <div className="mt-3 p-3 rounded border">
    { photo ? <img src={photo?.thumbnailUrl} className="rounded" /> : <Loading size="150" />}
    {post.id}
  </div>
}