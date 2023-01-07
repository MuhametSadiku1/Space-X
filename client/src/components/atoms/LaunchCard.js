import React, { useState, useEffect } from 'react';

const LaunchCard = ({ launchData }) => {
    return (
        <div>
            <h1>{launchData.mission_name}</h1>
            <p>{launchData.flight_number}</p>
            <p>{launchData.launch_date_local}</p>
        </div>
    )
}

export default LaunchCard;