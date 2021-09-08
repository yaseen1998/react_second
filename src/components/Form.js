import React, { Component } from "react";
import Image from "./Image";
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "",
      value: "",
    };
    

  }
  update = (event) => {
    this.setState({
      target: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      value: this.state.target,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="horns">number of horns</label>
          <select name="horns" onChange={this.update}>
            <option value="">horns:</option>
            <option value={1}>horns:1</option>
            <option value={2}>horns:2</option>
            <option value={3}>horns:3</option>
            <option value={100}>horns:100</option>
          </select>
          <input type="submit" name="" value="submit" />
        </form>
        <Image handleShownClose={this.handleShownClose} />
        <Image Horns={this.state.value} />
      </div>
    );
  }
}

export default Form;
