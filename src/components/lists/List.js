import React from 'react'
import PlaceDetails from '../place-details/PlaceDetails'
import ProductSkeleton from '../skeletons/product.skeleton'
import {Container, GridContainer, Heading, HeadingTwo, DivCont} from './list.style'



function List({places, isLoading}) {
//   function List({isLoading}) {
//   const places = [{
//     name: "Wakame Restaurant",
//     num_reviews: "11",
//     rating: '2.5',
//     price_level: "$$ - $$$",
//     price: "$20,000 - $500,000",
//     ranking: "#1 of 1 Restaurants in Dien Dien",
//     address: "24 Dong Khoi, Dien Dien 650000 Vietnam",
//     phone: "+84 58 3772 279",
//    web_url: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/",
//    email: "thinn80@gmail.com", 
//     cuisine: [
//       {
//         key: "10675",
//         name: "Vietnamese"
//       },
//       {
//         key: "10676",
//         name: "Pizza"
//       },
//       {
//         key: "10677",
//         name: "Intercontinental"
//       }
//     ]

    
// },

// {
//   name: "Royal Restaurant",
//   num_reviews: "6",
//   rating: '5',
//   price_level: "$$ - $$$",
//   price: "$20,000 - $500,000",
//   ranking: "#1 of 1 Restaurants in Dien Dien",
//   address: "24 Dong Khoi, Dien Dien 650000 Vietnam",
//   phone: "+84 58 3772 279",
//  web_url: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/",
//  email: "thinn80@gmail.com", 
//   cuisine: [
//     {
//       key: "10670",
//       name: "Vietnamese"
//     },
//     {
//       key: "10671",
//       name: "Pizza"
//     },
//     {
//       key: "10672",
//       name: "Intercontinental"
//     }
//   ]

// },

// {
//   name: "Calabar Kitchen",
//   num_reviews: "29",
//   rating: '',
//   price_level: "$$ - $$$",
//   price: "$20,000 - $500,000",
//   ranking: "#1 of 1 Restaurants in Dien Dien",
//   address: "24 Dong Khoi, Dien Dien 650000 Vietnam",
//   phone: "+84 58 3772 279",
//   web_url: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/",
//  email: "thinn80@gmail.com", 
//   cuisine: []

// }
// ]

let skeletonArr = Array.apply(null, {length: 6});

// console.log(!places.length)

if(isLoading){
  return (
              
    <Container> 
    <Heading>Explore the World with Expert Guidance
        <span>Discover unforgettable destinations with personalized travel advisor</span>
      </Heading>
    <GridContainer>
        {skeletonArr.map((item, index) => (
            <ProductSkeleton key={index} />
        ))}
    </GridContainer>
  </Container> 
  );
}

  return (
    <Container>
    {!places?.length ? 
      <DivCont>
         <img src='images/sorry.png' alt='' />
         <HeadingTwo>Oops Nothing Here! <span>Please enter a location.</span></HeadingTwo>
       </DivCont>
      :
      <>
      <Heading>Explore the World with Expert Guidance
      <span>Discover unforgettable destinations with personalized travel advisor</span>
    </Heading>
      <GridContainer>
          {places?.map((place, i) => (
            <PlaceDetails  key={i} place={place} index={i}/>
          ))}
      </GridContainer>
      </>
      }
    
    </Container>
    
  )
}

export default List