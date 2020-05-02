import React, { useReducer } from "react";
import SearchUsername from "./components/SearchUsername";

const initialState = { data: undefined };

function reducer(state, action) {
  switch (action.type) {
    case "setData":
      return { data: action.payload.data };
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Github Readme Viewer</h1>
      <SearchUsername state={state} dispatch={dispatch} />
    </div>
  );
};
export default App;
