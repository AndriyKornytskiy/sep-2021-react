import './Comments.css'
import {useEffect, useState} from "react";
import Comment from "./Comment";

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                setComments(comments);
            });
    },[])

    return (
        <div className={'comments_wrap'}>
            {
                comments.map(value => <Comment key={value.id} value={value}/>)
            }
        </div>
    );
}