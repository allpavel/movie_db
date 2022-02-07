import React from 'react';
import { NavbarWrapper } from './Navbar.styles';

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <ul>
                <li>
                    <a href='#'>Movies</a>
                </li>
                <li>
                    <a href='#'>TV Shows</a>
                </li>
                <li>
                    <a href='#'>Trailers</a>
                </li>
                <li>
                    <a href='#'>Lists</a>
                </li>
            </ul>
        </NavbarWrapper>
    )
}