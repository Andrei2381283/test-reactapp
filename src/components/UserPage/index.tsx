import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhoto } from "../../store/actions/photosActions";
import { IState, User } from "../../types";
import { getCommentsFor } from "../../services/comments";
import { fetchPosts } from "../../store/actions/postsActions";
import Loading from "../Loading/Loading";
import PostCard from "../PostCard/PostCard";
import { getUser } from "../../services/users";

const defaultUser: User = {
  id: -1,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
}


export default function UserPage() {

  const { userId } = useParams();
  const id = Number(userId);

  const allPosts = useSelector((state: IState) => state.postsReducer.posts);
  const userPosts = allPosts.filter(post => post.userId == id);

  const dispatch = useDispatch();
  const photo = useSelector((state: IState) => state.photosReducer.photos[id]);

  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    if (!photo) dispatch(fetchPhoto(id));
  }, [photo]);

  useEffect(() => {
    if (user.id < 0) getUser(id).then(res => setUser(res.data));
  }, [user]);

  useEffect(() => {
    if (!allPosts.length) dispatch(fetchPosts());
  }, [allPosts]);

  if (!photo || user.id < 0) return <div className="d-flex justify-content-center mt-5"><Loading size="100" /></div>

  return <div className="d-flex flex-column px-5 py-3">
    <div className="d-flex flex-column flex-sm-row mt-4 rounded border p-2 p-sm-4 fs-5 mb-5">
      {photo ? <img src={photo.url} className="rounded mw-100" width={200} /> : <Loading size="200" />}
      <div className="ms-3">
        <h2 className="m-0">{user.name}</h2>
        <span>{user.username}</span>
        <p className="m-0 mt-3 fs-6 fw-semibold">Телефон: <span className="fs-6 fw-normal">{user.phone}</span></p>
        <p className="m-0 fs-6 fw-semibold">Сайт: <span className="fs-6 fw-normal">{user.website}</span></p>
        <p className="m-0 fs-6 fw-semibold">E-mail: <span className="fs-6 fw-normal">{user.email}</span></p>
      </div>
    </div>
    <h3>Список постов пользователя:</h3>
    {userPosts.map(post => <PostCard post={post} key={post.id} />)}
  </div>
}