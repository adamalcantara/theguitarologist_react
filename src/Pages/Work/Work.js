import React from 'react'

// import dependencies
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import photos from "./photos.ts";

const Work = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <div>
      <PhotoAlbum photos={photos} layout='rows' targetRowHeight={150} onClick={({ index: current }) => setIndex(current)}/>
    </div>
  )
}

export default Work