import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './routes/home';
import Invoices from './routes/invoices';

import './main.css';
import Navbar from "./navbar";

const rootElement = document.getElementById('app');
ReactDOM.render(
  <Navbar />,
  rootElement
);
