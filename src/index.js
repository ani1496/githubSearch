import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/store';
import Container from './components/index';
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
