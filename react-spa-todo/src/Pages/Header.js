import React from 'react';
import { Link } from 'react-router-dom';

export function Header (){
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contacts">Contacs</Link>
                <Link to="/about-me">About me</Link>
            </nav>
        </header>
    );
}