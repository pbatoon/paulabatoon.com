import React from 'react';
import '../css/App.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {

    const navStyle = {
        color: 'white',
        'text-decoration': 'none'
    };

    const HoverText = styled.li`
        color: white;
        :hover {
            background: #e5a493;
            transition: 0.3s;
        }
    
    `

    return(

        <nav>
            <Link to='/'>
                <img src={logo} alt="logo" className="nav-logo"/>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <HoverText>Home</HoverText>
                </Link>
                <Link style={navStyle} to='/resume'>
                    <HoverText>Resume</HoverText>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav