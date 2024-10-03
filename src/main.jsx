import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { store } from './Redux/store.jsx'
import { Provider } from 'react-redux'
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
