import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const CustomLink = ({ children, to, ...props }) => {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? 'rgb(48, 155, 255)' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
                {match && ""}
            </div >
        );
    }

    return (
        <Navbar className='navigation fixed-top' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <Link to='/' className='navbar-title-link'>
                        <h1>InventoryStation</h1>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <nav className='nav-links'>
                            <CustomLink to='/home'>Home</CustomLink>
                            <CustomLink to='/inventory'>Inventory</CustomLink>
                            <CustomLink to='/manage-inventory'>Manage Inventory</CustomLink>
                            <CustomLink to='/blogs'>Blogs</CustomLink>
                            <CustomLink to='/my-items'>My Items</CustomLink>
                        </nav>
                    </Nav>
                    <Link to='/login'>
                        <button className='button-navbar-login btn btn-outline-dark'>Login</button>
                    </Link>
                    <Link to='/sign-up'>
                        <button className='button-navbar-signup btn btn-primary'>Sign Up</button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;