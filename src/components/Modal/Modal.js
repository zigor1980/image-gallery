import React, {Component} from 'react';

import './Modal.css'

class Modal extends Component{

    render (){
        const {images,showImage,clickPrev, clickNext} = this.props;
        return (
            <div className="Modal">
                <div style={{alignSelf:`center`}}>
                    <button
                        className="Modal_Button Modal_Button__Nav"
                        onClick={clickPrev}
                    >{`<`}</button>
                </div>

                    <div className="Modal_Content">
                        <button className="Modal_Button Modal_Button__Close"
                            onClick={this.props.onClose}
                        >{`X`}
                        </button>
                            <img src={`${images[showImage].path}`} alt=""/>
                    </div>
                <div style={{alignSelf:`center`}}>
                    <button className="Modal_Button Modal_Button__Nav" onClick={clickNext}>{`>`}</button>
                </div>
            </div>
        );
    }
}

export default Modal;