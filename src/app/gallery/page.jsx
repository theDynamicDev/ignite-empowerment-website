import Gallery from "./components/Gallery"
import { client } from "../../lib/sanity.client";
import groq from "groq";

const query = groq`*[_type=='gallery'] { 
    ...,
    image {
        asset->
    }
    
    } | order(_createdAt desc)
    `;


    const gallery = await client.fetch(query);
   
    

const galleryData = gallery
// console.log(galleryData);



const page = async () => {
  const data = await galleryData;
  const images = data.map(item => item.image.asset.url);
 
  // console.log('INSIDE PAGE',images);
  return(
    <>
    
      <Gallery data={images}/>
    </>
  )
}
export default page
