import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";
import Comment from "../../components/Comment/Comment";

const SinglePostCommentsPage = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        postService.getCommentsById(id).then(value => setComments(value))
    },[id])

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {SinglePostCommentsPage};