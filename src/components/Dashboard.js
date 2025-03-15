import React from 'react';
import HeaderTitle from '../Navbar/HeaderTitle';
import { Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            {/* Header always visible */}
            <HeaderTitle />

            {/* Page content with margin from fixed header */}
            <div style={{ marginTop: "50px" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
