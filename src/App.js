import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import WhatWeDo from './components/pages/WhatWeDo';
import WhatWeHaveDone from './components/pages/WhatWeHaveDone';
import WhoWeAre from './components/pages/WhoWeAre';
import SustainabilityTimeline from './components/layout/SustainabilityTimeline';
import YarnTools from './components/layout/YarnTools';
import './styles/globals.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/what-we-do" element={<WhatWeDo />} />
                <Route path="/portfolio" element={<WhatWeHaveDone />} />
                <Route path="/about" element={<WhoWeAre />} />
                <Route path="/sustainability" element={<SustainabilityTimeline />} />
                <Route path="/yarn-tools" element={<YarnTools />} />
            </Routes>
        </Router>
    );
}

export default App;