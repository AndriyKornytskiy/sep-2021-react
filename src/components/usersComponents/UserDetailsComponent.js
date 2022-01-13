export default function UserDetailsComponent(props) {

    const {user:{id, name, username, email, phone, website, address:{city, street, suite, zipcode}, company:{name:work}}, getUserId} = props

    return (
        <div className='user_details_inner'>
            <h2>{name} - {username}</h2>
            <ul><i>Info:</i>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{website}</li>
            </ul>
            <ul><i>Live in:</i>
                <li>{city}</li>
                <li>{street}</li>
                <li>{suite}</li>
                <li>{zipcode}</li>
            </ul>
            <ul><i>Work at:</i>
                <li>{work}</li>
            </ul>
            <button onClick={()=> {getUserId(id)}}>Get posts</button>
        </div>
    );
}