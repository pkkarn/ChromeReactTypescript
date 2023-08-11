import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuComponent } from './scriptComponent/TestComponent'

const utilEl = document.createElement('div')
utilEl.setAttribute('id', 'menu__ed')
document.body.appendChild(utilEl)

if (utilEl) {
  ReactDOM.createRoot(utilEl).render(<MenuComponent />);
} else {
  console.error('Element not found');
}