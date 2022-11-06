import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home'
import About from './pages/about'
import Social from './pages/social'
import EventDetails from './pages/eventdetails'
import Contact from './pages/contact'
import NotFound from './pages/notfound'
import Layout from './pages/layout'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/2023'>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="eventdetails" element={<EventDetails />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="social" element={<Social />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
