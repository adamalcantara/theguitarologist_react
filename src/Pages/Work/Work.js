import React from "react";
import PhotoAlbum from "react-photo-album";

import "yet-another-react-lightbox/styles.css"

// Import images
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import img6 from "./images/image6.jpg";
import img7 from "./images/image7.jpg";
import img8 from "./images/image8.jpg";
import img9 from "./images/image9.jpg";
import img10 from "./images/image10.jpg";
import img11 from "./images/image11.jpg";
import Lightbox from "yet-another-react-lightbox";

const photos = [
  {src: img1, width: 2000, height: 1333},
  {src: img2, width: 2000, height: 1333},
  {src: img3, width: 1326, height: 2000},
  {src: img4, width: 1333, height: 2000},
  {src: img5, width: 2000, height: 1333},
  {src: img6, width: 1333, height: 2000},
  {src: img7, width: 2000, height: 1333},
  {src: img8, width: 1333, height: 2000},
  {src: img9, width: 1333, height: 2000},
  {src: img10, width: 2000, height: 1333},
  {src: img11, width: 2000, height: 1333},
]

export default function Work() {
  const [index, setIndex] = React.useState(-1);
  return (
    <div>
      <PhotoAlbum 
        layout="rows" 
        photos={photos}
        targetRowHeight={300} 
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox 
        index={index} 
        slides={photos} 
        open={index >= 0} 
        close={() => setIndex(-1)} 
      />
    </div>
  )  
}