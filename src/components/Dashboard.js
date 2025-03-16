import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Navbar/Header';
import Footer from '../Navbar/Footer';

function Dashboard() {
    return (
        <div>
            <Header />

            <div style={{ marginTop: "50px" }}>
                <Outlet />
            </div>

            <Footer/>
        </div>
    );
}

export default Dashboard;
