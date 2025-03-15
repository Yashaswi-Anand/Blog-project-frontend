import React from 'react'
import HeaderTitle from '../Navbar/HeaderTitle'
import Home from './Home'
import { Route, Router, Routes } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <Router>
                {/* Header always visible */}
                <HeaderTitle />

                {/* Page content */}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/gadget" element={<GadgetPage />} />
                        <Route path="/ai-website" element={<AIWebsitePage />} />
                        <Route path="/apps" element={<AppsPage />} />
                        <Route path="/tips" element={<TipsPage />} />
                        <Route path="/profile" element={<ProfilePage />} /> */}
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default Dashboard