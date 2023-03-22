import React, {useEffect, useState} from 'react'
import './App.css';
import Header from './components/header/Header'
import List from './components/lists/List'
import Map from './components/map/Map'
import Footer from './components/Footer/Footer'
import {getPlacesData} from './api/api'


function App() {
const [places, setPlaces] = useState()
const [isLoading, setIsLoading] = useState(false)
const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
const [bounds, setBounds] =  useState({ ne: 0, sw: 0 });
const [category, setCategory] = useState('restaurants')
const [rating, setRating] = useState('All')
const [filteredPlaces, setFilteredPlaces] = useState([]);

useEffect(() => {
  navigator.geolocation.getCurrentPosition(({ coords : { latitude, longitude}}) => {
    setCoordinates({lat: latitude, lng: longitude})
  })
}, [])


useEffect(() => {
  if(bounds.sw && bounds.ne){
    setIsLoading(true);

    getPlacesData(category, bounds.sw, bounds.ne)
      .then(data => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
        setFilteredPlaces([]);
        setIsLoading(false);
      })
  }
}, [bounds, category])

useEffect(() => {
  const filtered = places?.filter((place) => Number(place.rating) > rating);
  setFilteredPlaces(filtered);
}, [rating, places]);

console.log({places, rating})
  return (
    <div className='container'>
      <Header 
        setCoordinates={setCoordinates}
        category={category}
        setCategory={setCategory}
        rating={rating}
        setRating={setRating}
      />
      <div className='main'>
        <List 
           places={filteredPlaces?.length ? filteredPlaces : places}
          // places={places}
          isLoading={isLoading}/>
      </div>
      <Map 
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        bounds={bounds}
        width={window.innerWidth}
        height={window.innerHeight}
      />
       <Footer />
    </div>
  );
}

export default App;
