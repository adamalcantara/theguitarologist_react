import * as React from 'react'
import "yet-another-react-lightbox/styles.css"

// import dependencies
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import photos from "../../Data/photos.ts";

const Work = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <div>
      <PhotoAlbum 
        layout='rows' 
        photos={photos} 
        targetRowHeight={200} 
        onClick={({ index: current }) => setIndex(current)}
       />

      <Lightbox 
        index={index} 
        slides={photos} 
        open={index >= 0} 
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Work