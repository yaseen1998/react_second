/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import HornedBeast from "./HornedBeast";
import img from "./data.json";
class Image extends Component {
    constructor(props){
        super(props)
      
    }



  render() {
    return (
      <div className="row">
          
        {img.map((element,index) => {
           {
                        img.map((element,index)=>{
                          return <HornedBeast
                          key ={index} 
                          title={element.title} 
                          image_url={element.image_url}
                           description ={element.description}
                          keyword = {element.keyword} 
                          horns={element.horns}/>
                        })
                    }
                    
                </div>

            
            if(element.horns==this.props.Horns){
          return <HornedBeast
          key={index}
            title={element.title}
            image_url={element.image_url}
            description={element.description}
            keyword={element.keyword}
            horns={element.horns}
          />;
        }
          else if (this.props.Horns === ''){
            
            return <HornedBeast
            key={index}
            title={element.title}
            image_url={element.image_url}
            description={element.description}
            keyword={element.keyword}
            horns={element.horns}/>;
           
          }
        
        })}
      </div>
    );
   

  }
}

export default Image;
// return <HornedBeast
//                           handleOpen={this.props.handleOpen}
//                           title={element.title}
//                           image_url={element.image_url}
//                            description ={element.description}
//                           keyword = {element.keyword}
//                           horns={element.horns}/>

// {element.horns == 2 ? <HornedBeast
//     handleOpen={this.props.handleOpen}
//     title={element.title}
//     image_url={element.image_url}
//      description ={element.description}
//     keyword = {element.keyword}
//     horns={element.horns}/>
//     :console.log('no');}

//   }
// )
// }
