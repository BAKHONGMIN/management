import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   typography:{
      fontFamily:'"Nanum Gothic", sans-serif'
   }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

reportWebVitals();
