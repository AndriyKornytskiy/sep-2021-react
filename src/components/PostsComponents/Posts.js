import './Posts.css'
import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            });
    }, [])

    return (
        <div className={'posts_wrap'}>
            {
                posts.map(value => <Post key={value.id} value={value}/>)
            }

        </div>
    );
}