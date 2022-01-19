import {Link} from "react-router-dom";

const UserDetails = ({user}) => {

    const {id, name, username, email, phone, website, address:{city, street, suite, zipcode}, company:{name:work}} = user

    return (
        <div>
            <h2>{id} - {name} - "{username}"</h2>
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
            <Link to={'posts'} state={user}>
                <button>Show Posts</button>
            </Link>
        </div>
    )
}

export default UserDetails;