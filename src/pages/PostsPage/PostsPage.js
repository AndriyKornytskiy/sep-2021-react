import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

import css from "./PostsPage.module.css"

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        postService.getAll().then(value => setPosts(value))
    },[])
    return (
        <div className={css.posts_wrap}>
            <div className={css.posts_list}>{posts.map(value => <Post key={value.id} post={value}/>)}</div>
            <div className={css.posts_details}><Outlet/></div>
        </div>
    );
};

export {PostsPage};