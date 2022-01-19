const Comment = ({comment}) => {

    const {id, postId, name, body, email} = comment

    return (
        <div>
            <h3>{postId}-{id} -- {email} -- {name}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;