import React, { Component } from 'react'
import {Button,Card,Col} from 'react-bootstrap';
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
    getHandleOpen=()=>{
        let description=this.props.description;
        let title=this.props.title;
        let url = this.props.image_url
        let horns = this.props.horns
        this.props.handleOpen(description,title,url,horns);
    }
    render() {
        return (

            <>
            <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img className={'image'} variant="top" onClick={this.raiselike} src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        number of like  🧡🧡: {this.state.statelike}
                            
                        </Card.Text>
                        <Button 
                                onClick={this.getHandleOpen}
                                variant="primary"
                        >
                                descriptin
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
        )
    }
}

export default HornedBeast
//<div className={'main'}>
        //         <div className ={'container'}>
            

        //     <img onClick={this.raiselike} src = {this.props.image_url} alt = 'HornedBeas'  style={{width: "300px"}}></img>
        //     <hr/>
        //     <h2>HornedBeast: {this.props.title}</h2>
        //     <p>description {this.props.description} <br/> <strong> number of horns: {this.props.horns} horns</strong></p>
        //     </div>
        //     <div className={'like_img'} >number of like  🧡🧡: {this.state.statelike} </div> 
        //     <hr/>
        // </div>