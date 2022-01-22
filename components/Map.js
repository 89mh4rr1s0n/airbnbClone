import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import Image from 'next/image'
//import getCenter from 'geolib/es/getCenter';
const geolib = require('geolib');

const Map = ({searchResults}) => {

    const [selectedLocation, setSelectedLocation] = useState({})

    const coOrdinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = geolib.getCenter(coOrdinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 12,
      });

    //console.log(selectedLocation)

    return (<ReactMapGL
    mapStyle={'mapbox://styles/m-s-h-89/ckykb5x4t5xu814mhe2xtf1ad'}
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(viewport) => setViewport(viewport)}
    >
        {searchResults.map((result, i) => (
            <div key={i}>
                <Marker
                longitude={result.long}
                latitude={result.lat}
                >
                    <div className='z-0'>
                        <p 
                        onClick={() => setSelectedLocation(result)} 
                        className='cursor-pointer text-xl animate-bounce'>
                            📍
                        </p>
                    </div>
                </Marker>
                {/* popup when clicked on pin */}
                {selectedLocation.long === result.long ? (
                    
                        <Popup
                        closeOnClick={true}
                        onClose={() => setSelectedLocation({})}
                        latitude={result.lat}
                        longitude={result.long}
                        >
                            <div className='relative h-[150px] w-[235px] rounded-2xl'>
                                <div className='absolute h-full w-full bg-gradient-to-b from-transparent to-gray-600 z-30 rounded-2xl'></div>
                                <Image 
                                className='rounded-2xl'
                                src={result.img}
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                />
                                
                            </div>
                            <div className='absolute top-1/2 w-full pl-2 text-white text-semibold z-50'>
                                <div>{result.title}</div>
                                <div>{result.price}</div>
                            </div>
                           
                            
                        </Popup>
                        
                    
                ) : (
                    false
                )}
            </div>
        ))}
    </ReactMapGL>)
}

export default Map
