import React from 'react'

function Cell (data){
    let {props,onImageClick} = data;
    let ratio = 0;
    let heigth = '';
    let width= '';
    if (window.innerWidth <= 425){
        ratio = Math.round(props.images.downsized.height/props.images.downsized.width * 100);
        heigth = ratio ? ratio + 'vw' : '';
    } else if((window.innerWidth <= 1024)&&(window.innerWidth > 425)) {
        heigth = 100+'px';
        ratio = Math.round(props.images.downsized.width/props.images.downsized.height);
        width = 100*ratio;

    } else {
        heigth = 150+'px';
        ratio = Math.round(props.images.downsized.width/props.images.downsized.height);
        width = 150*ratio;
    }
    const etio = props.images.downsized.width/props.images.downsized.height;
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
    )
}

export default Cell;
