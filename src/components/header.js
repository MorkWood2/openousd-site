import { Link } from "gatsby"
import React from "react"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./header.scss"
import logo from "../images/oo-logo-combined.svg"


const Header = ({ siteTitle }) => (
    // Nasty fragment, but sticky positioning doesn't work within nonstandard tags?
    // https://github.com/twbs/bootstrap/issues/21919
    <>
        <Navbar bg="white" variant="light" expand="md" className="d-flex flex-column">
            <div id="logo-row" className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">
                <div id="logo" className="mx-sm-auto ml-lg-4">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <div id="tagline" className="text-center text-lg-right pt-2">
                    Volunteers providing transparent access to Oakland Unified School District budget & data
                </div>
            </div>
        </Navbar>
        <Navbar bg="white" variant="light" expand="md" sticky="top" id="menu-row">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="sticky-top">
                <Nav className="menu mx-auto flex-nowrap d-flex flex-column">
                    <hr className="d-none d-md-block"/>
                    <div className="menu-items d-flex flex-column flex-md-row mx-md-auto mt-3 mt-md-0">
                        <Nav.Item><Link to="/" activeClassName="active"><span className="d-none d-md-block"><span className="dot"/></span>Home</Link></Nav.Item>
                        <Nav.Item><Link to="/departments" activeClassName="active"><span className="d-none d-md-block"><span className="dot"/></span>Departments</Link></Nav.Item>
                        <Nav.Item><Link to="/page-2/" activeClassName="active"><span className="d-none d-md-block"><span className="dot"/></span>Contact</Link></Nav.Item>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)

Header.defaultProps = {
    siteTitle: ``,
}


export default Header
