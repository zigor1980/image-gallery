/**
 * Created by Sw_DOn on 24.03.2018.
 */
import React from 'react'

function Cell (data){
    let {props,onImageClick} = data;
    return (
        <img
            src={`${props.path}`}
            alt=""
            onClick={onImageClick}
        />
    )
}

export default Cell;