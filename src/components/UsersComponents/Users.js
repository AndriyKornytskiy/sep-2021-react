import {useEffect, useState} from "react";
import User from "./User";

import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUsers(users);
            });
    }, [])


    return (
        <div className={'users_wrap'}>
            {
                users.map(value => <User key={value.id} value={value}/>)
            }

        </div>
    );
}