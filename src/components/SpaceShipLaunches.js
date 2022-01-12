import {useEffect, useState} from "react";

import {getLaunches} from "../services/spaceShipLaunches/SpaceShipLaunches.service";
import SpaceShipLaunch from "./SpaceShipLaunch";

export default function SpaceShipLaunches() {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(value => setLaunches(value.filter(launche => launche.launch_year !== '2020')))

    }, [])



    return (
        <div className='launches_box'>
            {
                launches.map(value => <SpaceShipLaunch key={value.flight_number} value={value}/>)

            }
        </div>
    );
}