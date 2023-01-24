import React from 'react';

const Gallery = ({name, img, bgColor}) => {
    const backgroundColor = bgColor;

    if(name==="PINKFLOYD"){
        bgColor = "red"
    }else{
        bgColor = "green"
    }

    return (
      <div style={{backgroundColor: bgColor}}>
        <h3>{name}</h3>
        <img src={img}></img>
      </div>
    )
};

export default Gallery