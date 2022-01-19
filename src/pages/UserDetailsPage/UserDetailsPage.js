import {useLocation, Outlet} from "react-router-dom";

import UserDetails from "../../components/UserDetails/UserDetails";

import './UserDetailsPage.css'

const UserDetailsPage = () => {

    const {state:user} = useLocation();

    return (
        <div>
            <UserDetails user={user}/>
            <div className='user_posts'><Outlet/></div>
        </div>
    );
};

export {UserDetailsPage};