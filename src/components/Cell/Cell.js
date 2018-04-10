import React from 'react'

function Cell (data){
    let {props,onImageClick} = data;
    return (
        <img
            src={`${props.images.downsized.url}`}
            alt=""
            onClick={onImageClick}
        />
    )
}

export default Cell;
