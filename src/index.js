import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import TodoContext from "./context";
import todoReducer from "./reducer";
import TodoList from "./components/TodoList";

const App = () => {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>
    <TodoList/>
  </TodoContext.Provider>;
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
