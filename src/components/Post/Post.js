import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post

    return (
        <div>
            <Link to={id.toString()} state={post}><h3>{id}. {title}</h3></Link>
        </div>
    );
};

export default Post;