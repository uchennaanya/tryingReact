import React from 'react';
import ReactDOM from 'react-dom';
import Forms from './form.js'
import MouseTracker from './mousemove.js'
import "./App.css";

const show = <h1> Uche Welcomes you to his personal blog </h1>

  class Navigators extends React.Component{
    render(){
      return (
        <nav>
              <ul>
                <li><a href="#" style={{color:'red'}}>Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          )
    }
  }

ReactDOM.render(<Navigators />, document.getElementById('myNav'))
ReactDOM.render(show, document.getElementById('root'))
ReactDOM.render(<Forms />, document.getElementById('forms'))
ReactDOM.render(<MouseTracker />, document.getElementById('mousetracker'))
