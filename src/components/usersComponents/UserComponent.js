export default function UserComponent(props) {

    const {user:{id, name}, grabDetails} = props

    return (
        <div className='single_user_inner'>
            <h3>{id} - {name}</h3>
            <button onClick={()=> {grabDetails(id)}}>Get details</button>
        </div>
    );
}