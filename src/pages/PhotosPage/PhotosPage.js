import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {albumService} from "../../services/album.service";
import Photo from "../../components/Photo/Photo";

import './PhotosPage.css'

const PhotosPage = () => {

    const {albumId} = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(()=> {
        albumService.getPhotosById(albumId).then(value => setPhotos(value))
    },[albumId]);

    return (
        <div className='photos'>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotosPage};