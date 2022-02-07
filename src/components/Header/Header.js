import React from 'react';
import LogoImage from '../../images/logo.svg';
import { Wrapper, Logo } from './Header.styles';
import { Navbar } from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <Wrapper>
                <Logo src={LogoImage} alt='movieDV-logo' />
                <Navbar />
            </Wrapper>
            <Outlet />
        </>
    )
};
