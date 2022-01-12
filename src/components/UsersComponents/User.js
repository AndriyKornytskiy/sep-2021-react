export default function User({value:{id, name, username, email, phone}}) {


    return (
        <div className={'singleUser'}>
            <h2>{id}: {name}</h2>
            <h3>{username} - {email}</h3>
            <p>{phone}</p>
        </div>
    );
}