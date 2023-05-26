import { useDispatch, useSelector } from "react-redux";
import { IState, Post } from "../../types";
import { clearPosts, fetchPosts } from "../../store/actions/postsActions";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import PostCard from "./components/PostCard/PostCard";
import { Pagination } from "react-bootstrap";

const maxPosts = Number(process.env.REACT_APP_PAGE_SIZE);

export default function MainPage() {

  let [searchParams, setSearchParams] = useSearchParams();
  const [filterText, setFilterTest] = useState("");

  const dispatch = useDispatch();

  const allPosts = useSelector((state: IState) => state.postsReducer.posts);
  let filteredPosts = allPosts;
  if(filterText) filteredPosts = allPosts.filter(_post => _post.title.match(new RegExp(filterText, "i")));

  const page = Number(searchParams.get("page") || 0);

  const posts = filteredPosts.slice(maxPosts*page, maxPosts*page + maxPosts);

  useEffect(() => {
    if(!allPosts.length) dispatch(fetchPosts());
  }, [allPosts]);

  const pagItems = [];

  for (let i = 0; i < Math.ceil(filteredPosts.length/maxPosts); i++) {
    pagItems.push(
      <Pagination.Item onClick={() => setSearchParams(i ? `page=${i}` : "")} key={i} active={i === page}>
        {i + 1}
      </Pagination.Item>
    )
  }

  return <div className="d-flex flex-column px-5 py-3">
    <h1>Posts</h1>
    <div>
      <input type="text" placeholder="Search" value={filterText} onChange={(event) => setFilterTest(event.target.value)} /><button onClick={() => setFilterTest("")} className="bg-transparent border-0">X</button>
    </div>
    {
      allPosts.length ? posts.map((element: Post) => <PostCard post={element} key={element.id} />) : <div className="align-self-center mt-3"><Loading /></div>
    }
    <Pagination className="mt-5 justify-content-center">
      {pagItems}
    </Pagination>
  </div>
}