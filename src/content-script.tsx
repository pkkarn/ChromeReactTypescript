import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuComponent } from './scriptComponent/TestComponent'

const utilEl = document.createElement('div')
utilEl.setAttribute('id', 'menu__ed')
utilEl.style.position = 'fixed';
utilEl.style.width = '33%';
utilEl.style.height = '100%';
utilEl.style.top = '0';
utilEl.style.right = '0';
utilEl.style.zIndex = '1000';

document.body.appendChild(utilEl)

if (utilEl) {
  ReactDOM.createRoot(utilEl).render(<MenuComponent />);
} else {
  console.error('Element not found');
}