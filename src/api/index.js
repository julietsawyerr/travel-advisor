// import axios from 'axios'

// const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// export async function getPlacesData(sw, ne){
//     try {
//         const {data : {data}} = await axios.get(url, {
//           params: {
//             bl_latitude: sw.lat,
//             tr_latitude: ne.lat,
//             bl_longitude: sw.lng,
//             tr_longitude: ne.lng,
//           },
//           headers: {
//             'X-RapidAPI-Key': 'eddcf991f4mshf9e0e9e9c02ab10p1c98bbjsnff4fcc2be6b1',
//             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//           }
//         })
//         return data
//     } catch(error){
//         console.log(error)
//     }
// }