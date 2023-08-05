import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {VideoDetail, ChannelDetail, SearchFeed, Feed, Navbar} from './components/';
import '../src/index.css'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
