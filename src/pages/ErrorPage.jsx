import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <h1>ERROR PAGE 404 !!!</h1>
            <Link to='/'>Return</Link>
        </>
    );
};

export default ErrorPage;