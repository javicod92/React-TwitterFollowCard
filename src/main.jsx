import { App } from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const container = document.getElementById('root');
// if (!container) throw new Error('ROOT element does not exist');
const root = ReactDOM.createRoot(container);

root.render(
  <App />
);
