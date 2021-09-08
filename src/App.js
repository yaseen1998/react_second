
import React, { Component } from 'react'
import Form from './components/Form'
import Image from './components/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/first.css'

export class App extends Component {
  render() {
    return (
      <>
        <div className={'app'}>
          <Form />
          <Image />

        </div>

      </>

    )
  }
}
export default App