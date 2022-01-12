export default function Comment({value:{id, postId, name, email, body}}) {
    return (
        <div>
            <h3>{id} - {postId} - {email}</h3>
            <h2>{name}</h2>
            <p>{body}</p>
        </div>
    );
}