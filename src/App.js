import React from 'react';
import Main from './component/MainComponents';
import './App.css';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/configurStore';

const store=ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Main></Main>
    </div>
    </Provider>
  );
}
export default App;

