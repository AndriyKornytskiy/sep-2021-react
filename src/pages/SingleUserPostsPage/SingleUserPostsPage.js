import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import PostDetails from "../../components/PostDetails/PostDetails";

const SingleUserPostsPage = () => {

    const {state:{id}} = useLocation();

    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=> {
        userService.getPostsByID(id).then(value => setUserPosts(value))
    },[id])
    return (
        <div>
            {
                userPosts.map(post => <PostDetails key={post.id} post={post}/>)
            }
        </div>
    );
};

export {SingleUserPostsPage};