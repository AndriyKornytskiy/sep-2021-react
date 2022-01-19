import {useLocation, Outlet} from "react-router-dom";

import PostDetails from "../../components/PostDetails/PostDetails";

import './PostDetailsPage.css'

const PostDetailsPage = () => {

    const {state:post} = useLocation();

    return (
        <div>
            <PostDetails post={post}/>
            <div className='post_comments'><Outlet/></div>
        </div>
    );
};

export {PostDetailsPage};