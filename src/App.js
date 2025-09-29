import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';  // This will now find it!
import OurValues from './components/pages/OurValues';
import InHouseProduction from './components/pages/InHouseProduction';
import YarnStore from './components/pages/YarnStore';
import DesignAndDevelopment from './components/pages/DesignAndDevelopment';
import OverseasProduction from './components/pages/OverseasProduction';
import ContactPage from './components/pages/ContactPage';
import Layout from './components/layout/Layout';
import './styles/globals.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* Home page - simple hero only */}
                <Route path="/" element={<Home />} />

                {/* Main navigation pages */}
                <Route path="/our-values" element={<OurValues />} />
                <Route path="/in-house-production" element={<InHouseProduction />} />
                <Route path="/yarn-store" element={<YarnStore />} />
                <Route path="/design-development" element={<DesignAndDevelopment />} />
                <Route path="/overseas-production" element={<OverseasProduction />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Redirect old routes to new ones */}
                <Route path="/what-we-do" element={<Navigate to="/in-house-production" replace />} />
                <Route path="/portfolio" element={<Navigate to="/design-development" replace />} />
                <Route path="/about" element={<Navigate to="/our-values" replace />} />
                <Route path="/sustainability" element={<Navigate to="/our-values" replace />} />
            </Routes>
        </Router>
    );
}

export default App;