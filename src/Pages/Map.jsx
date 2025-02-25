import React, { useState, useRef } from 'react'
import Navbar from '../Components/Navbar'
import { IoIosSearch } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { Autocomplete, DirectionsRenderer, GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'
import { FaLocationDot } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import { FaBus, FaCar, FaWalking } from 'react-icons/fa'
import { RiMotorbikeFill } from 'react-icons/ri'

const center = { lat: 48.8584, lng: 2.3584 } // Default Paris location

const Map = () => {
    const [map, setMap] = useState(null)
    const [directionResponse, setDirectionResponse] = useState(null)
    const [distance, setDistance] = useState("")
    const [duration, setDuration] = useState("")
    const [searchLocation, setSearchLocation] = useState(null) // For bottom search marker
    const [currentLocation, setCurrentLocation] = useState(null) // For current location marker

    // Refs for Autocomplete inputs
    const originRef = useRef(null)
    const destinationRef = useRef(null)
    const searchRef = useRef(null) // Ref for bottom search input

    const calculateRoute = async () => {
        if (!originRef.current || !destinationRef.current) return;

        const originPlace = originRef.current.getPlace();
        const destinationPlace = destinationRef.current.getPlace();

        if (!originPlace || !destinationPlace) {
            toast.error("Please select a location from the suggestions.");
            return;
        }

        const directionsService = new google.maps.DirectionsService();

        try {
            const results = await directionsService.route({
                origin: originPlace.geometry.location,
                destination: destinationPlace.geometry.location,
                travelMode: google.maps.TravelMode.DRIVING
            });

            if (!results || results.status !== "OK") {
                throw new Error("Route not found");
            }

            setDirectionResponse(results);
            setDistance(results.routes[0].legs[0].distance.text);
            setDuration(results.routes[0].legs[0].duration.text);
        } catch (error) {
            toast.error("Route not found. Please try a different location.");
            setDirectionResponse(null);
            setDistance("");
            setDuration("");
        }
    };

    // Handle Search Functionality in the Bottom Input
    const handleSearch = () => {
        if (!searchRef.current) return;

        const place = searchRef.current.getPlace();
        if (!place || !place.geometry) {
            toast.error('Please select a valid location');
            return;
        }

        const location = place.geometry.location;
        setSearchLocation({ lat: location.lat(), lng: location.lng() });

        if (map) {
            map.panTo(location);
            map.setZoom(14);
        }
    }

    // Handle Enter Key for Search Input
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    // Handle Current Location Button
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    setCurrentLocation(location);
                    if (map) {
                        map.panTo(location);
                        map.setZoom(15);
                    }
                },
                () => toast.error("Unable to retrieve your location.")
            );
        } else {
            toast.error("Geolocation is not supported by your browser.");
        }
    }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAQ24KsI7b1DOiV9ci3Nqw7jJElxql_EDA",
        libraries: ['places']
    })

    if (!isLoaded) return <div>Loading...</div>

    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                {/* Sidebar Search Box */}
                <div className="fixed z-10 bottom-5 left-5 max-w-[20rem] w-full bg-white border border-gray-200 rounded-lg p-4">
                    <Autocomplete onLoad={(auto) => (originRef.current = auto)}>
                        <input type="text" className='border border-gray-200 p-2 w-full rounded-lg' placeholder='Choose start Location' />
                    </Autocomplete>
                    <Autocomplete onLoad={(auto) => (destinationRef.current = auto)}>
                        <input type="text" className='border border-gray-200 p-2 w-full rounded-lg mt-2' placeholder='Enter Destination' />
                    </Autocomplete>
                    <button
                        type="submit"
                        onClick={calculateRoute}
                        className="w-full flex items-center gap-1 justify-center mt-3 p-3 rounded-xl border-none duration-500 text-base cursor-pointer bg-[#1b6657] text-white font-semibold transition-all hover:bg-[#1d554a] hover:scale-105"
                    >
                        Search <IoSearch className='text-xl' />
                    </button>
                    <button
                        type="submit"
                        className="w-full flex items-center gap-2 justify-center mt-3 p-3 rounded-xl border-none duration-500 text-base cursor-pointer bg-[#1b6657] text-white font-semibold transition-all hover:bg-[#1d554a] hover:scale-105"
                        onClick={getCurrentLocation}
                    >
                        <FaLocationDot /> Current Location
                    </button>

                    {directionResponse && (
                        <>
                            <div className='mt-6'>
                                <p>Distance: <span className='font-medium text-green-600'>{distance}</span> </p>
                                <p className='mt-2'>Duration: <span className='font-medium text-green-600'>{duration}</span></p>
                            </div>

                            <div className="flex items-center gap-5 justify-center mt-7">
                                <FaCar className='text-2xl cursor-pointer' />
                                <FaBus className='text-2xl cursor-pointer' />
                                <RiMotorbikeFill className='text-2xl cursor-pointer' />
                                <FaWalking className='text-2xl cursor-pointer' />
                            </div>
                        </>
                    )}

                </div>

                {/* Google Map */}
                <div className="relative pt-5">
                    <GoogleMap center={center} zoom={15} mapContainerClassName="w-full absolute top-0 left-0 h-[calc(100vh-5.05rem)]" onLoad={(map) => setMap(map)}>
                        {/* Show Current Location Marker */}
                        {currentLocation && <MarkerF position={currentLocation} />}

                        {/* Show Searched Location Marker */}
                        {searchLocation && <MarkerF position={searchLocation} />}

                        {/* Show Directions */}
                        {directionResponse && <DirectionsRenderer directions={directionResponse} />}
                    </GoogleMap>

                    {/* Bottom Search Input */}
                    <div className="border relative z-10 bg-white border-gray-200 rounded-full md:max-w-lg max-w-[90%] px-4 p-2 w-full mx-auto flex items-center gap-2">
                        <Autocomplete onLoad={(auto) => (searchRef.current = auto)} className='w-full'>
                            <input
                                type="text"
                                className='w-full p-0.5'
                                placeholder='Search here...'
                                onKeyDown={handleKeyPress}
                            />
                        </Autocomplete>
                        <IoIosSearch className='text-xl text-zinc-600 cursor-pointer' onClick={handleSearch} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map
