import React from 'react';
import Main from './component/MainComponents';
import './App.css';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/configurStore';


//to install font-awesome write
// yarn add font-awesome@4.7.0
// to install bootstrap-social
// yarn add bootstrap-social@5.1.1
//to isntall redux write
// yarn add redux@3.7.2
//to isntall react-redux write
// yarn add react-redux@5.0.7
//to isntall react-redux-form write
// yarn add react-redux-form@1.16.9
//to install cross-fetch
//yarn add cross-fetch@2.1.0

//FOR ANIMATIONS
//to install react-transition-group
//yarn add react-transition-group@2.3.0
// to install react-animation-components
//yarn add react-animation-components@3.0.0
// to install prop-types
//yarn add prop-types@15.6.0


// to install react router dom
// yarn add react-router-dom@4.2.2
// to install redux-thunk
//yarn add redux-thunk@2.2.0
// to install redux-logger
//yarn add redux-logger@3.0.6



//to start server 
//json-server --watch db.json -d 2000 -p 3001





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

