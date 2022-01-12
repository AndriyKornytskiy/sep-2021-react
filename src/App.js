import './App.css';
import Users from "./components/UsersComponents/Users";
import Posts from "./components/PostsComponents/Posts";
import Comments from "./components/CommentsComponents/Comments";

function App() {
  return (
      <div className='main'>
        <Users/>
        <Posts/>
        <Comments/>
      </div>
  );
}

export default App;
