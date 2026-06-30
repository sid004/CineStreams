import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { RecentlyViewedProvider } from "./context/recentlyViewedContext.jsx"

createRoot(document.getElementById('root')).render(
  <RecentlyViewedProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </RecentlyViewedProvider>
  
)
