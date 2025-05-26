import React from 'react';
import ReactDOM from 'react-dom/client';
import SortingVisualizer from './SortingVisualizer';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SortingVisualizer />
  </React.StrictMode>
);