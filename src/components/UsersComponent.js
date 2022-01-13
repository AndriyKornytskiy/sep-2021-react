import {useEffect, useState} from "react";

import UserComponent from "./UserComponent";
import {userService} from "../services/usersServices/users.service";

export default function UsersComponent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(user => setUsers(user))
    },[])

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
}