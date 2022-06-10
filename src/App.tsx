import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { AuthContext } from './AppContext';
import { AuthWrapper, RequireAuth } from './AuthWrapper';
import { Login } from './components/Login';
import { MainContent } from './components/MainContent';

function App() {
    return (
        <AuthWrapper>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/todos" element={
                    <RequireAuth>
                        <MainContent />
                    </RequireAuth>
                } />
            </Routes>
        </AuthWrapper>
    );
}

export default App;
