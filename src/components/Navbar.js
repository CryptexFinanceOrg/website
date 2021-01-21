import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
//import { useMediaQuery } from 'react-responsive';
import appEndpoint from '../endpoint';

export default () => {
  // const appEndpoint = "https://rinkeby.cryptex.finance/";
  /**const isMobileDevice = useMediaQuery({ query: '(max-device-width: 428px)' });
  const isTabletDevice = useMediaQuery({ query: '(max-device-width: 768px)' });
  const isTabletDevice2 = useMediaQuery({ query: '(max-device-width: 834px)' });
  const isTabletDevice3 = useMediaQuery({ query: '(min-device-width: 1024px)' });
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });   
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' }); **/

  const NavMobile = () => {
    return (
      <div className="nav-mobile">  
        <Navbar fixed="top" expand="lg md sm xl">
          <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
             <img className="menu-logo mobile" src="/logom.svg" alt="Logo" /> 
             <img className="menu-logo tablet" src="/logo.svg" alt="Logo" /> 
            
            <div className="menu-logo-divider"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mobile_menu_bar" aria-hidden="true"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
              <Nav.Link as={Link} to="#about" className="nav-links" title="What is TCAP?">
                What is TCAP?
              </Nav.Link>
              <div className="nav-links-divisor"></div>
              <Nav.Link as={Link} to="#features" title="How to use TCAP?">
                How to use TCAP?
              </Nav.Link>
              <div className="nav-links-divisor"></div>
              <Nav.Link as={Link} to="#team" title="Team">
                Team
              </Nav.Link>
              <div className="nav-links-divisor"></div>
              <Nav.Link as={Link} to="#faq" title="FAQ">
                FAQ
              </Nav.Link>
              <div className="nav-links-divisor"></div>
              <Nav.Link as={Link} to="#community" title="Community">
                Community
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar fixed="top" collapseOnSelect expand="sm" className="responsive-app-button">
          <a href={appEndpoint} target="_blank" rel="noreferrer" className="button-navbar">
            Go to App
          </a>
        </Navbar>
      </div>
    )
  }

  const NavDesktop = () => {
    return (
      <div className="nav-default">  
        <Navbar fixed="top" collapseOnSelect expand="lg">
          <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
            <img className="menu-logo" src="/logo.svg" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mobile_menu_bar" aria-hidden="true"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="nav-links">
              <Nav.Link as={Link} to="#about" className="nav-links" title="What is TCAP?">
                What is TCAP?
              </Nav.Link>
              <Nav.Link as={Link} to="#features" title="How to use TCAP?">
                How to use TCAP?
              </Nav.Link>
              <Nav.Link as={Link} to="#team" title="Team">
                Team
              </Nav.Link>
              <Nav.Link as={Link} to="#faq" title="FAQ">
                FAQ
              </Nav.Link>
              <Nav.Link as={Link} to="#community" title="Comunity">
                Community
              </Nav.Link>
              <a href={appEndpoint} target="_blank" rel="noreferrer" className="button-navbar">
                Go to App
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

  return (
      <>      
        <NavMobile/>       
        <NavDesktop/>                
      </>
  )
}
