import {useEffect, useState} from "react";

import {userService} from "../../services/usersServices/users.service";
import {postsService} from "../../services/postsServices/posts.service";
import UserComponent from "./UserComponent";
import UserDetailsComponent from "./UserDetailsComponent";
import PostComponent from "../postsComponents/PostComponent";

export default function UsersComponent() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getAll().then(user => setUsers(user))

        postsService.getAll().then(post => setPosts(post))
    },[])

    const grabDetails = (id) => {
        userService.getById(id)
            .then(value => setUser(value))
    }

    const getUserId = (id) => {
        setId(id)
    }


    return (
        <div className='users'>
            <div className='single_user'>
                {
                    users.map(user => <UserComponent key={user.id} user={user} grabDetails={grabDetails}/>)
                }
            </div>
            <div className='user_details'>
                {
                    user && <UserDetailsComponent user={user} getUserId={getUserId}/>
                }
            </div>
            <div className='user_posts'>
                {
                    posts.filter(value => value.userId === id).map(post => <PostComponent key={post.id} post={post}/>)
                }
            </div>
        </div>

    );
}