export default function Post({value:{id, userId, title, body}}) {
    return (
        <div className={'singlePost'}>
            <h3>{id} - {userId}</h3>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}