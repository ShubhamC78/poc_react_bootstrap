import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import './App.css';
import Navbar from './components/CustomNavbar';
import Exercises from './components/exercise/Exercises';
import { Header, Footer } from './components/layout';
import { exercises, muscles } from './store';
import { connect } from 'react-redux';
{/* 
  
      for bootstrap code
  <Router>
<div>
  <Navbar/>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/news" component={News} />
</div>
</Router> */}
class App extends Component {
  state = {
    exercises
  }
  getExerciseByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
        return exercises
      }, {})
    )
  }


  render() {
    const exercises = this.getExerciseByMuscles();
   
    return (
      <div>
        {/* <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} /> */}
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { user } = state.login;
  return { user };
 }

export default connect(mapStateToProps)(App);