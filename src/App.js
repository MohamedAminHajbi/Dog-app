import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';

import Home from './components/Home';
import Footer from './components/Footer';
import Info from './components/Info';
import Card from './components/Card';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Container sx={{ paddingTop: '10px', flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/:name" element={<Info />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;