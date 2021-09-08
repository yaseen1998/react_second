
import React, { Component } from 'react'
import Image from './components/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/first.css'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
        showModal:false,
       
    }
}

  
  
  render() {
    return (


<>


      <div className={'app'}>

        <Image />

      </div>

</>
    )
  }
}
export default App