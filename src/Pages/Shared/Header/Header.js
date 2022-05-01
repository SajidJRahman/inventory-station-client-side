import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    const CustomLink = ({ children, to, ...props }) => {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={match ? { borderBottom: '3px solid rgb(38, 139, 255)' } : { borderBottom: '' }}
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
        <Navbar className='navigation fixed-top' bg="dark" expand="lg">
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
                    {
                        user &&
                        <div>
                            <img className='mx-3 rounded-pill bg-light' width='45px' src={user?.photoURL} alt="" />
                            <p className='my-0 me-3 fw-bold'>{user?.displayName}</p>
                        </div>
                    }
                    {
                        user ?
                            <div>
                                <button onClick={handleSignOut} className='btn btn-outline-light px-4'>Log Out</button>
                            </div>
                            :
                            <div>
                                <Link to='/login'>
                                    <button className='button-navbar-login btn btn-outline-light'>Login</button>
                                </Link>
                                <Link to='/sign-up'>
                                    <button className='button-navbar-signup btn btn-primary'>Sign Up</button>
                                </Link>
                            </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;