import { useDispatch, useSelector } from "react-redux";
import { IState, Post } from "../../types";
import { clearPosts, fetchPosts } from "../../store/actions/postsActions";
import Loading from "../Loading/Loading";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import PostCard from "./components/PostCard/PostCard";
import { Pagination } from "react-bootstrap";


export default function MainPage() {

  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const posts = useSelector((state: IState) => state.postsReducer.posts);

  const page = Number(searchParams.get("page") || 0);

  useEffect(() => {
    console.log('Location changed');
    console.log(location, page);
    dispatch(fetchPosts(page));
  }, [location]);

  const pagItems = [];

  for (let i = 0; i < 10; i++) {
    pagItems.push(
      <Pagination.Item onClick={() => setSearchParams(i ? `page=${i}` : "")} key={i} active={i === page}>
        {i + 1}
      </Pagination.Item>
    )
  }

  return <div className="d-flex flex-column px-5 py-3">
    <h1>Posts</h1>
    {
      posts.length ? posts.map((element: Post) => <PostCard post={element} key={element.id} />) : <div className="align-self-center mt-3"><Loading /></div>
    }
    <Pagination className="mt-5 justify-content-center">
      {pagItems}
    </Pagination>
  </div>
}