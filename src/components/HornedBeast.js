import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/first.css'
class HornedBeast extends Component {
    constructor(props){
        super(props);

        this.state={
                statelike:0,
        }
    }
    raiselike=()=>{
        console.log(this.state.statelike)
        this.setState({
            statelike:this.state.statelike+1
            
        })
    }
    render() {
        return (
            <div className={'main'}>
                <div className ={'container'}>
            

            <img onClick={this.raiselike} src = {this.props.image_url} alt = 'HornedBeas'  style={{width: "300px"}}></img>
            <hr/>
            <h2>HornedBeast: {this.props.title}</h2>
            <p>description {this.props.description} <br/> <strong> number of horns: {this.props.horns} horns</strong></p>
            </div>
            <div className={'like_img'} >number of like  🧡🧡: {this.state.statelike} </div> 
            <hr/>
        </div>
        )
    }
}

export default HornedBeast
