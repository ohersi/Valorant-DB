import React, { useEffect, useEFfect} from 'react';

const Maps = ({ mapData, fetchVal }) => {

    useEffect(() => {
        fetchVal()
    }, []);
    return (
        <>
        <div id="map-container">
            {
                mapData.map(map => (
                    <div key={map.uuid}>
                        <h2>{map.displayName}</h2>
                        <h4>{map.coordinates}</h4>
                        <img id='map-splash' src={map.splash} alt="splash-img" />
                    </div>
                ))
            }
        </div>
    </>
    );
}

export default Maps;