export default function PostComponent(props) {

    const {post:{id, userId, title, body}} = props

    return (
        <div className='user_posts_inner'>
            <h4>{userId} - {id}</h4>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}