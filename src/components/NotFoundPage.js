import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;