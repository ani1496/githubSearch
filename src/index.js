import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/store';
import Container from './components/index';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
import './styles/colors.css';
import './styles/components.css';
import './styles/alignment.css';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Container />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
