import React, { useState, useEffect } from 'react';
import LaunchCard from '../atoms/LaunchCard';
import styled from 'styled-components';

const ListOfSpaceXLaunches = ({ spacexData }) => {

    const pastLaunches = spacexData.filter(launch => launch.upcoming === false);
    const orderedLaunches = pastLaunches.sort((a, b) => {
        return Date(a.launch_date_local) - Date(b.launch_date_local)
    });

    return (
        <LaunchesContainer>
            {orderedLaunches.map(data => (
                <LaunchCard launchData={data} />
            ))}
        </LaunchesContainer>
    )
}

export default ListOfSpaceXLaunches;

const LaunchesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
`;