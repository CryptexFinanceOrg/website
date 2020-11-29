import React from "react"
// import ThemeContext from "../utils/theme"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import Media from 'react-media';

export default () => {
  // const mediaQuery = "screen and (min-width: 768px)";
  // const mql = typeof window !== `undefined` ? window.matchMedia(mediaQuery) : null;
  // const [showDesktopMenu, setShowDesktopMenu] =  mql ? useState(mql.matches) : true;

  // useEffect(() => {
  //   if(mql) {
  //     const handleMediaChange = (media) => {
  //       setShowDesktopMenu(media.matches);
  //     };

  //     mql.addEventListener("change", handleMediaChange);
  //     setShowDesktopMenu(mql.matches);

  //     return () => {
  //       mql.removeEventListener("change", handleMediaChange);
  //     };
  //   }
  // }, [mql]);
  // const { toString } = useContext(ThemeContext)
  // const isMobile = width <= 500;

  const NavMobile = () => {
    return (
      <>
        <Navbar fixed="top" expand="sm">
          <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
            <img className="menu-logo" src="/logom.svg" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mobile_menu_bar" aria-hidden="true"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Navbar.Text>Menu</Navbar.Text>
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar fixed="top" collapseOnSelect expand="sm" className="responsive-app-button">
          <a href="https://app.cryptex.finance" target="_blank" rel="noreferrer" className="button-navbar">
            Go to App
          </a>
        </Navbar>
      </>
    )
  }

  const NavDesktop = () => {
    return (
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
            <a href="https://app.cryptex.finance" target="_blank" rel="noreferrer" className="button-navbar">
              Go to App
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

  return (
    <>
      <Media query={{ maxWidth: 420 }}>
      {matches =>
            matches ? (
              <NavMobile/> 
            ) : (
              <NavDesktop/>
            )
          }      
      </Media>
    </>
  )
}
