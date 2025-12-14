import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import OurValues from './components/pages/OurValues';
import MadeInLondon from './components/pages/MadeInLondon';
import DesignAndDevelopment from './components/pages/DesignAndDevelopment';
import Portfolio from './components/pages/Portfolio';
import OverseasProduction from './components/pages/OverseasProduction';
import ContactPage from './components/pages/ContactPage';
import ModernSlaveryPage from './components/pages/ModernSlaveryPage';
import EnvironmentalPolicyPage from './components/pages/EnvironmentalPolicyPage';
import './styles/globals.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* Home page - simple hero with clickable logo */}
                <Route path="/" element={<Home />} />

                {/* Main navigation pages */}
                <Route path="/design-development" element={<DesignAndDevelopment />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/made-in-london" element={<MadeInLondon />} />
                <Route path="/overseas-production" element={<OverseasProduction />} />
                <Route path="/our-values" element={<OurValues />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Policy pages */}
                <Route path="/modern-slavery" element={<ModernSlaveryPage />} />
                <Route path="/environmental-policy" element={<EnvironmentalPolicyPage />} />

                {/* Redirect old routes to new ones */}
                <Route path="/in-house-production" element={<Navigate to="/made-in-london" replace />} />
                <Route path="/knit-store" element={<Navigate to="/our-values" replace />} />
                <Route path="/yarn-store" element={<Navigate to="/our-values" replace />} />
                <Route path="/what-we-do" element={<Navigate to="/made-in-london" replace />} />
                <Route path="/about" element={<Navigate to="/our-values" replace />} />
                <Route path="/sustainability" element={<Navigate to="/environmental-policy" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
