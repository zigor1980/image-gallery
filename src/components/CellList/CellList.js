/**
 * Created by Sw_DOn on 24.03.2018.
 */
import React, {Component} from 'react';
import Cell from '../Cell/Cell';
import Modal from '../Modal/Modal'
import './CellList.css'

class CellList extends Component {
    constructor (props){
        super(props);
        this.state = {
            showImage:null,
            showModal:false
        }
    }

    handleClick = (el) => this.setState({
        showModal:!this.state.showModal,
        showImage:el
    });

    handleClickNext = () => {
        let inc = this.state.showImage;
        inc  = (inc + 1) > (this.props.imageList.length - 1) ? 0 : inc + 1;
        this.setState({
            showImage: inc
        });
    };


    handleClickPrev = () => {
        let inc = this.state.showImage;
        inc  = inc - 1 < 0 ? this.props.imageList.length - 1 : inc - 1;
        this.setState({
            showImage: inc
        });
    }

    render(){
        const modal =
            this.state.showModal &&
            <Modal images={this.props.imageList}
                   showImage={this.state.showImage}
                   onClose={this.handleClick}
                   clickNext={this.handleClickNext.bind(this)}
                   clickPrev={this.handleClickPrev.bind(this)}
            />;
            const imageElements = this.props.imageList.map(el => {
                let ratio = (el.w / el.h);
                if (ratio < 1){
                    ratio = 0;
                } else if(ratio ===1){
                    ratio = 0;
                }
                else{
                    ratio = Math.round((ratio - 1)/4*10);
                }
                return(
                    <div key={el.id}
                         style={{flexGrow: `${ratio}`,flexShrink:`${ratio}`} }
                         className="Wrapper-Cell">
                        <Cell props={el} onImageClick={
                            this.handleClick.bind(this,
                                this.props.imageList.indexOf(el))}/>
                    </div>
                    )
            });
        return (
            <div className="Wrapper">
                {imageElements}
                {modal}
            </div>
        )
    }
}

export default CellList;

