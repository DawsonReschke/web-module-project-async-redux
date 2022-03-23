import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actionCreators from "./state/action-creators"
import MathFact from './components/MathFact';
import NewFactButton from './components/NewFactButton';

function App(props) {
  const {
    mathFact,
    fetchNewFact
  } = props
  
  
  useEffect(()=>{
    fetchNewFact();
  },[])


  return (
    <div className="App">
      <h1>Random Math Fact Generator!</h1>
      <MathFact mathFact={mathFact}/>
      <NewFactButton onClick={fetchNewFact}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mathFact:state.mathFact
  }
}

export default connect(mapStateToProps,actionCreators)(App)