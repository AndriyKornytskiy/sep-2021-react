import './Photo.css'

const Photo = ({photo}) => {

    const {id, albumId, title, thumbnailUrl:pic} = photo

    return (
        <div className='photo_wrap'>
            <div>
                <h4>{albumId}-{id}</h4>
                <h4>{title}</h4>
            </div>
            <div>
                <img src={pic} alt={title}/>
            </div>
        </div>
    );
};

export default Photo;