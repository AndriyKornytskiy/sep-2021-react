import {Link} from "react-router-dom";

import './Album.css'

const Album = ({album}) => {

    const {id, userId, title} = album

    return (
        <div className='single_album'>
            <h3>{userId}-{id}--{title}</h3>
            <Link to={`${id}/photos`}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export default Album;