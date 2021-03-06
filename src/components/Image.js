import React, { Component } from "react";
import HornedBeast from "./HornedBeast";
import img from "./data.json";
class Image extends Component {
  render() {
    return (
      <div className="row">

        {img.map((element, index) => {

          if (element.horns === this.props.Horns) {
            return <HornedBeast
              key={index}
              title={element.title}
              image_url={element.image_url}
              description={element.description}
              keyword={element.keyword}
              horns={element.horns}
            />;
          }
          else if (this.props.Horns === '') {

            return <HornedBeast
              key={index}
              title={element.title}
              image_url={element.image_url}
              description={element.description}
              keyword={element.keyword}
              horns={element.horns} />;

          }
          else if (this.props.Horns === 0) {

            return <HornedBeast
              key={index}
              title={element.title}
              image_url={element.image_url}
              description={element.description}
              keyword={element.keyword}
              horns={element.horns} />;

          }
          return null

        })}
      </div>
    );


  }
}
export default Image;
