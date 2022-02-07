import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
            </Route>
        </Routes>
    )
};
