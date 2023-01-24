import React from 'react';

const Gallery = ({name, img}) => {
    return (
      <div>
        <h3>{name}</h3>
        <img src={img}></img>
      </div>
    )
};

export default Gallery