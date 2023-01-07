import React, { useState, useEffect } from 'react';
import LaunchCard from '../atoms/LaunchCard';

const ListOfSpaceXLaunches = ({ spacexData }) => {

    const pastLaunches = spacexData.filter(launch => launch.upcoming === false);

    return (
        <>
            {pastLaunches.map(data => (
                <LaunchCard launchData={data} />
            ))}
        </>
    )
}

export default ListOfSpaceXLaunches;