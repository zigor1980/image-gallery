import React from 'react'

function Cell (data){
    let {props,onImageClick} = data;
    let ratio = 0;
    let heigth = '';
    let width= '';
    if (window.innerWidth <= 425) {
        ratio = Math.round(props.images.downsized.height / props.images.downsized.width * 100);
        heigth = ratio ? ratio + 'vw' : '';
    }
    return (
        <div
            className="Wrapper-Cell"
            style={{height: heigth, width:width}}
        >
        <img
            src={`${props.images.original.url}`}
            alt=""
            onClick={onImageClick}
        />
        </div>
    );
}

export default Cell;
