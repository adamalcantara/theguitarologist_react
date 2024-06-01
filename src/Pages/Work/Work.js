import React from "react";
import PhotoAlbum from "react-photo-album";

// Import images
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";

const photos = [
  {src: img1, width: 2000, height: 1333},
  {src: img2, width: 2000, height: 1333},
  {src: img2, width: 2000, height: 1333},
]

export default function Work() {
  return (
    <div>
      <PhotoAlbum layout="rows" photos={photos} targetRowHeight={200} />
    </div>
  )  
}