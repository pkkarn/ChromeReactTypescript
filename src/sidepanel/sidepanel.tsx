import React from 'react';
import ReactDOM from 'react-dom/client';
import { SidePanelPage } from './SidePanelPage'

const popupEl = document.createElement('div')
popupEl.setAttribute('id', 'sidepanel_page')
document.body.appendChild(popupEl)

ReactDOM.createRoot(document.getElementById('sidepanel_page')!).render(
  <SidePanelPage />,
)