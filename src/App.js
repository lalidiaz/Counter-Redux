import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Button from './Components/Button';
import { addCounter, removeCounter, resetCounter} from './store';


class App extends React.Component{
      render(){
        return (
          <div className="App">
            <p>Counter: {this.props.counter}</p>
            <Button label='Add' action={addCounter} />
            <Button label='Remove' action={removeCounter}/>
            <Button label='Reset' action={resetCounter} />
          </div>
        );  
      }
};


function mapStateProps(state){
  console.log(state, 'soy el state')
return {
  counter: state.counter,
  name: state.name
  };
}

export default connect(mapStateProps)(App);
