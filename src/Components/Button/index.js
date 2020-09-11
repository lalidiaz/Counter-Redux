import React from 'react';
import './style.css';
import { addCounter } from '../../store';
import { connect } from 'react-redux';


class Button extends React.Component{

    handleClick(){
        const { dispatch } =  this.props
        
        console.log(this.props)
        dispatch(this.props.action());
    }


    render(){
        return(
            <div>
            <button onClick={() => this.handleClick()}>{this.props.label}</button>
            </div>
        );
    }
}

export default connect()(Button);