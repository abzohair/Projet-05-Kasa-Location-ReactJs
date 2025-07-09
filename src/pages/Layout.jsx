import React from 'react';
import Header from '../components/Header';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {

    const location = useLocation();
    const patterns = ['/', '/accomodation/:id', '/about'];

    const isKnownPath = patterns.some(pattern => matchPath(pattern, location.pathname));

    return (
        <>
            {isKnownPath && <Header />}
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;