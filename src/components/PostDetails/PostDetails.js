import {Link} from "react-router-dom";

const PostDetails = ({post}) => {

    const {id, userId, title, body} = post

    return (
        <div>
            <h3>{id} - {title}</h3>
            <p>{body}</p>
            <p><i>posted by {userId} user</i></p>
            <Link to={'comments'} state={post}>
                <button className='comment_btn'>Show Comments</button>
            </Link>
        </div>
    );
};

export default PostDetails;