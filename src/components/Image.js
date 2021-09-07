import React, { Component } from 'react'
import HornedBeast from './HornedBeast';
import img from'./data.json'
class Image extends Component {
    
    render() {
        
        return (
            
          <div className="row">

                    {
                        img.map(element=>{
                          return <HornedBeast 
                          handleOpen={this.props.handleOpen} 
                          title={element.title} 
                          image_url={element.image_url}
                           description ={element.description}
                          keyword = {element.keyword} 
                          horns={element.horns}/>
                        })
                    }
                    
                </div>
            
        )
    }
}

export default Image
