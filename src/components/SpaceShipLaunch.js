export default function SpaceShipLaunch(value) {
   const {value:{launch_year, mission_name, links:{mission_patch_small}}} = value
    return (
        <div className='single_launch'>
            <div className='description'>
                <h2>{mission_name}</h2>
                <p>{launch_year}</p>
            </div>
            <div className='logo'>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
}