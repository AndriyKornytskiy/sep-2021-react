import {Link} from "react-router-dom";

import './User.css'

const User = ({user}) => {

    const {id, name} = user

    return (
        <div className='users'>
            <Link to={id.toString()} state={user}>
                <h2>{id}) {name}</h2>
            </Link>
            <Link to={`${id.toString()}/albums`}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export default User;