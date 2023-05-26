import { useDispatch, useSelector } from "react-redux";
import { Comment, IState, Post } from "../../../../types";
import { useEffect, useState } from "react";
import { fetchPhoto } from "../../../../store/actions/photosActions";
import Loading from "../../../Loading/Loading";
import { Accordion } from "react-bootstrap";
import { getCommentsFor } from "../../../../services/comments";
import { Link } from "react-router-dom";

export default function PostCard({ post }: { post: Post }) {

  const [comments, setComments] = useState([] as Comment[]);

  const dispatch = useDispatch();
  const photo = useSelector((state: IState) => state.photosReducer.photos[post.userId]);

  useEffect(() => {
    if (!photo) {
      dispatch(fetchPhoto(post.userId));
    }
  }, [photo])

  const updateComments = () => {
    if(!comments.length) getCommentsFor(post.id).then((res) => setComments(res.data));
  }

  return <>
    <div className="mt-3 p-3 d-flex rounded border">
      {photo ? <Link to={`/user/${post.userId}`}><img src={photo?.thumbnailUrl} className="rounded" /></Link>: <Loading size="150" />}
      <div className="d-flex flex-column ms-3">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
    <Accordion defaultActiveKey="1">
      <Accordion.Item onClick={updateComments} eventKey="0">
        <Accordion.Header>Комментарии</Accordion.Header>
        <Accordion.Body className="d-flex flex-column">
          {comments.length ? comments.map(comment => 
            <div className="border-top py-2">
              <h5 className="mb-0">{comment.email}</h5>
              <span>{comment.body}</span>
            </div>
          ) : <div className="align-self-center"><Loading/></div>}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>
}