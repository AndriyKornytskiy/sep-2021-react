import UserComponent from "./UserComponent";

export default function UsersComponent({fileredUsers}) {

    return (
        <div>
            {
                fileredUsers.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
}