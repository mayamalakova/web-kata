import React, { Component } from 'react'
import './App.css'
import Data from './data.js'
import Products from './Products.js'

class App extends Component {
  render() {
  return <div className="App">
    <Products products={Data.products}/>
  </div>
  }
}

export default App;
