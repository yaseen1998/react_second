import React, { Component } from 'react'
import {
    Modal,
    Button
} from "react-bootstrap";
import './css/first.css'

export class SelectedBeast extends Component {
    render() {
        return (
            
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
           
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><div ><img className={'img-size'} src={this.props.url} alt='' /></div>
        <br/> <div> <strong>description  :</strong> {this.props.description}
        <br/> <strong> number of horns: {this.props.horns} horns</strong> </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
            
          </Modal>        
          
            // <div class="modal-dialog modal-lg">...</div>
        )
    }
}



export default SelectedBeast
