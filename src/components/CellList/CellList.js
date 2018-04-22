import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell';
import Modal from '../Modal/Modal';
import './CellList.css';
import fetchImages from '../../actions/fetchImages';
import { Infinite } from '../Infinite/Infinite';


const stateToProps = state => ({
    items: state.images.items,
    next: state.images.next,
    end: state.images.end,
});

export const CellList = connect(stateToProps)(
    class CellList extends Component {
        constructor (props){
            super(props);
            this.state = {
                layout: null,
                showImage:null,
                showModal:false,
                loading:true,
            };
            this.fetch = this.fetch.bind(this);
            this.handleClick = this.handleClick.bind(this);
            this.handleClickNext = this.handleClickNext.bind(this);
            this.handleClickPrev = this.handleClickPrev.bind(this);
        }

        componentDidMount() {
            /*
            window.addEventListener('resize', ()=>{
                if (window.innerWidth <= 425){
                    this.setState({ layout: 'mobile' });
                } else if((window.innerWidth <= 1024)&&(window.innerWidth > 425)) {
                    this.setState({ layout: 'laptop' });
                } else {
                    this.setState({ layout: 'desktop' });
                }
            });
            */
            this.fetch()
                .then(() => {
                    this.setState({ loading: false });
                })
                .catch((error) => {
                    this.setState({
                        loading: false,
                        error,
                    });
                });
        }

        handleClick(el) {
            this.setState({
                showModal:!this.state.showModal,
                showImage:el
            });
        }

        handleClickNext() {
            let inc = this.state.showImage;
            inc  = (inc + 1) > (this.props.items.length - 1) ? 0 : inc + 1;
            this.setState({
                showImage: inc
            });
        }


        handleClickPrev() {
            let inc = this.state.showImage;
            inc  = inc - 1 < 0 ? this.props.items.length - 1 : inc - 1;
            this.setState({
                showImage: inc
            });
        }

        fetch() {
            return this.props.dispatch(fetchImages());
        }

        render(){
            const { items } = this.props;
            const modal =
                this.state.showModal &&
                <Modal items={this.props.items}
                    showImage={this.state.showImage}
                    onClose={this.handleClick}
                    clickNext={this.handleClickNext.bind(this)}
                    clickPrev={this.handleClickPrev.bind(this)}
                />;
            const imageElements = items.map(el => {
                return(
                    <Cell
                        key={el.id}
                        props={el} onImageClick={
                            this.handleClick.bind(this,this.props.items.indexOf(el))
                        } 
                    />
                );
            });
            return (
                <Infinite fetchNext={this.fetch}>
                    <div className="Wrapper" id="Wrapper">
                        {imageElements}
                    </div>
                    {modal}
                </Infinite>

            );
        }
    }
);
