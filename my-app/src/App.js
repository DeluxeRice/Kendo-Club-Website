import React from 'react';
import {HomePage, AboutPage, ContactPage, NewsletterPage, CalendarPage, SenseiPage, MissingPage } from './components';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='*' element= {<MissingPage/>}/> {/* Have 404 page be HomePage for now, since certain pages are not implemented fully. */}
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/about' element = {<AboutPage/>}/>
        <Route path = '/sensei' element = {<SenseiPage/>}/>
        <Route path = '/contact' element = {<ContactPage/>}/>
        <Route path = '/newsletter' element = {<NewsletterPage/>}/>
        <Route path = '/calendar' element = {<CalendarPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
