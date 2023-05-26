import { useParams } from "react-router-dom";


export default function MainPage() {

  const { userId } = useParams();
  
  return <div>User {userId} Page</div>
}