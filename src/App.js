import {useEffect, useState} from "react";

import FormComponent from "./components/formComponent/FormComponent";
import UsersComponent from "./components/usersComponents/UsersComponent";
import {usersServices} from "./services/usersServices/users.services";

function App() {

    const [users, setUsers] = useState([]);
    const [fileredUsers, setFileredUsers] = useState([]);

    useEffect(()=> {
        usersServices.getAll().then(value => {
            setUsers(value)
                setFileredUsers(value)
        })
    },[])

    function getFilteringData(data) {
        let filteredArray = [...users]

        if (data.name) {
            filteredArray = filteredArray.filter(item => item.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filteredArray = filteredArray.filter(item => item.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filteredArray = filteredArray.filter(item => item.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFileredUsers(filteredArray)
    }

  return (
    <div>
        <FormComponent getFilteringData={getFilteringData}/>
        <UsersComponent fileredUsers={fileredUsers}/>
    </div>
  );
}

export default App;
