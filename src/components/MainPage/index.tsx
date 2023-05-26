import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../types";
import { clearPosts } from "../../store/actions/postsActions";


export default function MainPage() {
    const posts = useSelector((state: IState) => state.postsReducer.posts);
    console.log(posts);
    
    return <div>Main Page</div>
}