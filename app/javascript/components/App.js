import React from "react"
import { BrowserRouter } from "react-router-dom";
import HelloWorld from "./HelloWorld";
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <HelloWorld greeting="Hello from react-rails." />
    </BrowserRouter>
    );
  }
}

export default App
