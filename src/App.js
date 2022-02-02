import {useReducer} from "react";

import {Form, ToDoList} from "./components";

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, toDo: [...state.toDo, {id: new Date().getTime(), name: action.payload}]}
    case 'DEL_TODO':
      return {...state, toDo: state.toDo.filter(item => item.id !== action.payload.id)}
    default:
      return state;
  }
}

function App() {
  const [{toDo}, dispatch] = useReducer(reducer, {toDo: []});

  return (
      <div>
        <Form dispatch={dispatch}/>
          <hr/>
        <ToDoList toDo={toDo} dispatch={dispatch}/>
      </div>
  );
}

export default App;
