import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export default function Nav() {
    return (
        <NavBar>
            <TheLink to="/" exact={true}>Home</TheLink>
            <TheLink to="/add">Add An Item</TheLink>
        </NavBar>
    )
}

const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    // background: rgba(0,0,0,.8);
`;
const TheLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    width: 50%;
    padding: 1.5%;
    margin: 0;
    font-size: 1.25rem;
`;
