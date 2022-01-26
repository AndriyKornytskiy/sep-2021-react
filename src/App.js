import {useReducer} from "react";

import './App.css';

function App() {

  const reducer = (state, action)=> {
    switch (action.type){
      case 'INC':
        return {...state,count1: state.count1 + 1};
      case 'INC2':
        return {...state,count2: state.count2 + 10};
      case 'INC3':
        return {...state,count3: state.count3 + 100};
      case 'DEC':
        return {...state,count1: state.count1 - 1};
      case 'DEC2':
        return {...state,count2: state.count2 - 10};
      case 'DEC3':
        return {...state,count3: state.count3 - 100};
      case 'RESET':
        return {...state,count1: state.count1 = 0};
      case 'RESET2':
        return {...state,count2: action.payload};
      case 'RESET3':
        return {...state,count3: action.payload};
      default:
          throw new Error('wtf')
    }
  }

  const [state, dispatch] = useReducer(reducer,{count1: 0, count2: 10, count3: 100});

  return (
    <div className='wrap'>
      <div>
        <div className='number'>{state.count1}</div>
        <button onClick={() => dispatch({type:'INC'})}>INC</button>
        <button onClick={() => dispatch({type:'DEC'})}>DEC</button>
        <button onClick={() => dispatch({type:'RESET'})}>RESET</button>
      </div>
      <div>
        <div className='number'>{state.count2}</div>
        <button onClick={() => dispatch({type:'INC2'})}>INC</button>
        <button onClick={() => dispatch({type:'DEC2'})}>DEC</button>
        <button onClick={() => dispatch({type:'RESET2', payload: 10})}>RESET</button>
      </div>
      <div>
        <div className='number'>{state.count3}</div>
        <button onClick={() => dispatch({type:'INC3'})}>INC</button>
        <button onClick={() => dispatch({type:'DEC3'})}>DEC</button>
        <button onClick={() => dispatch({type:'RESET3', payload: 100})}>RESET</button>
      </div>
    </div>
  );
}

export default App;
