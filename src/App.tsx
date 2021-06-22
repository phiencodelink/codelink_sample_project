import React from 'react';
import axios from "axios";

import Header from 'components/Header';

import { Provider } from "react-redux";
import store from 'store/index'
import AdviceContainer from 'components/AdviceContainer';

axios.defaults.baseURL =
  "https://api.adviceslip.com";


function App() {
  return (
    <Provider store={store}>
    <div className="App flex items-center flex-col h-screen bg-main-background">
      <Header />
      <AdviceContainer />
    </div>
    </Provider>
  );
}

export default App;
