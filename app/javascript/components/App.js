import React from "react"
import Greeting from "./Greeting";
import store from '../redux/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route exact path="" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);


export default App
