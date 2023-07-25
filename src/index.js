import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

// axios.defaults.baseURL = 'http://localhost:8800/api/';

axios.defaults.baseURL = 'https://yt-be-server.onrender.com/api/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store= {store}>
    <PersistGate loading={null} persistor={persistor}>
     <Router>
      <App />
      </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>
  
);
