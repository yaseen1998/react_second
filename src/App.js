// import React, { Component } from 'react'
// import Parent from './components/Parent'

// export class App extends Component {

//   render() {
//     return (
//       <div>
//         <Parent parentMoney={5}/>
//       </div>
//     )
//   }
// }

// export default App

import React, { Component } from 'react'
import Image from './components/Image'
import SelectedBeast from './components/SelectedBeast'
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
        showModal:false,
        title:"",
        description:'',
        url:'',
        horns:''
    }
}

  handleClose=()=>{
    this.setState({
      showModal:false
    })
  }
  handleOpen=(description,title,url,horns)=>{
    this.setState({
      showModal:true,
      description :description,
      title:title,
      url:url,
      horns:horns

    })
  }
  render() {
    return (
      <div>
        <Form/>
      <div className={'app'}>
        
        
        <Image handleOpen={this.handleOpen}/>
        <SelectedBeast handleClose={this.handleClose} 
                showModal={this.state.showModal} 
                description = {this.state.description}
                title = {this.state.title}
                url = {this.state.url}
                horns ={this.state.horns}
                 />
      </div>
      </div>
    )
  }
}

export default App
