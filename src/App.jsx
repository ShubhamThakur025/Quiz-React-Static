import './App.css'
import React, { Component } from 'react'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'

export default class App extends Component {
  render() {
    return (
      // UnComment the component to evaluate the component 
      <div>
        <HomeComponent/>
        {/* <QuizComponent/> */}
        {/* <ResultComponent /> */}
      </div>
    )
  }
}

