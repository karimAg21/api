import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import App from './ControleRedux.js/Exercice1/App'
// import { Provider } from 'react-redux'
// import { legacy_createStore } from 'redux';
// import reducer from './ControleRedux.js/Exercice1/reducer'
// const store=legacy_createStore(reducer)
import App from './projetapi/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <>
    <App />
  </>
);
reportWebVitals();
