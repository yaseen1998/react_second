import React, { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast'
import './css/first.css'

class HornedBeast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statelike: 0,
            showModal:false,
        }
    }
    raiselike = () => {
        this.setState({
            statelike: this.state.statelike + 1

        })
    }
    handleClose=()=>{
        this.setState({
          showModal:false
        })
      }
    getHandleOpen = () => {
        this.setState({
            showModal:true,
          })
          
        
        
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
                <SelectedBeast handleClose={this.handleClose} 
            showModal={this.state.showModal} 
            description = {this.props.description}
            title = {this.props.title}
            url = {this.props.image_url}
            horns ={this.props.horns}/>
            </>
        )
    }
}

export default HornedBeast
