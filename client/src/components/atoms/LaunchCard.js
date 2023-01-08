import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LaunchCard = ({ launchData }) => {
    const launchDate = {
        year: launchData.launch_date_local.split('-')[0],
        month: launchData.launch_date_local.split('-')[1],
        day: launchData.launch_date_local.split('-')[2],
        time: launchData.launch_date_local.split('-')[3]
    }

    return (
        <LaunchCardContainer>
            <img src={launchData.flickr_images[0]} />
            <LaunchCardHeader>
                <p>
                    {launchDate.month}/{launchDate.year}
                </p>
            </LaunchCardHeader>
            <h1>{launchData.mission_name}</h1>
            <p>{launchData.flight_number}</p>
            <p>{launchDate.year}-{launchDate.month}</p>
        </LaunchCardContainer>
    )
}

export default LaunchCard;

const LaunchCardContainer = styled.div`
    text-align: left;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 10px 0;
`;

const LaunchCardHeader = styled.div`
    background-color: #000;
    color: #fff;
    padding: 0.5px 10px;
`;