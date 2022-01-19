import {useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import Album from "../../components/Album/Album";

import './AlbumsPage.css'

const AlbumsPage = () => {
    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        userService.getAlbumsByID(id).then(value => setAlbums(value))
    },[id])


    return (
        <div className='albums'>
            {
                albums.map(album=> <Album key={album.id} album={album}/>)

            }
            <div><Outlet/></div>
        </div>
    );
};

export {AlbumsPage};