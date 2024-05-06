import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
