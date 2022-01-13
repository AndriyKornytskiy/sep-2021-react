export default function UserComponent(props) {

    const {id, name, username, email} = props

    return (
        <div className='single_user'>
            <h2>{id}: {name}</h2>
            <h3>{username} - {email}</h3>
        </div>
    );
}