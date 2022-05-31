import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import { Home, Jobs, Messages, Network, Notifications, Error } from './pages';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/network' element={<Network />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
