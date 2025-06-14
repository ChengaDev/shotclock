import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import Themes from '../constants/Themes'
import Routes from '../AppRoutes'
import { Link, useLocation } from 'react-router-dom'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import { useState, useRef, useEffect } from 'react'

type NavigationProps = {
  currentTheme: string
  setTheme: (theme: string) => void
}

const Navigation = ({ currentTheme, setTheme }: NavigationProps) => {
  const location = useLocation()
  const { locals } = useLocalization()
  const [expanded, setExpanded] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleNavClick = () => {
    setExpanded(false)
  }

  return (
    <Container ref={navRef}>
      <Navbar
        variant={currentTheme === Themes.Light ? 'light' : 'dark'}
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Navbar.Brand as={Link} to={Routes.Home}>
          <BrandText>ShotClock Pro</BrandText>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              to={Routes.Home}
              active={location.pathname === Routes.Home}
              onClick={handleNavClick}
            >
              {locals.home}
            </NavLink>
            <NavLink
              to={Routes.Instructions}
              active={location.pathname === Routes.Instructions}
              onClick={handleNavClick}
            >
              {locals.instructions}
            </NavLink>
            <NavLink
              to={Routes.FIBAResources}
              active={location.pathname === Routes.FIBAResources}
              onClick={handleNavClick}
            >
              {locals.fibaResources}
            </NavLink>
            <NavLink
              to={Routes.About}
              active={location.pathname === Routes.About}
              onClick={handleNavClick}
            >
              {locals.about}
            </NavLink>
            <ThemeToggle>
              <ThemeButton
                active={currentTheme === Themes.Light}
                onClick={() => setTheme(Themes.Light)}
              >
                light
              </ThemeButton>
              <ThemeDivider>|</ThemeDivider>
              <ThemeButton
                active={currentTheme === Themes.Dark}
                onClick={() => setTheme(Themes.Dark)}
              >
                dark
              </ThemeButton>
            </ThemeToggle>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

  nav {
    background: rgba(0, 0, 0, 0.8) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    font-family: 'Poppins', sans-serif;
    z-index: 1000;
  }

  .navbar-brand {
    font-size: 1.8rem;
    line-height: 1.5;
    color: ${(props) => props.theme.primary} !important;
    transition: transform 0.2s ease-in-out;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    &:hover {
      transform: scale(1.05);
    }
  }

  .navbar-toggler {
    border: none;
    padding: 0.5rem;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.9)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  @media (max-width: 768px) {
    nav {
      margin: 0;
      border-radius: 0;
    }

    .navbar-collapse {
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 0 0 1rem 1rem;
      padding: 1rem;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 1000;
    }
  }
`

const BrandText = styled.span`
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(45deg, #ffd700, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

const NavLink = styled(Link)<{ active: boolean }>`
  color: #ffffff !important;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;

  &:after {
    content: '';
    position: absolute;
    width: ${(props) => (props.active ? '100%' : '0')};
    height: 2px;
    bottom: 0;
    left: 0;
    background: #ffd700;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffd700 !important;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: ${(props) =>
      props.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};

    &:after {
      display: none;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    justify-content: center;
  }
`

const ThemeButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.active ? '#ffd700' : '#ffffff')};
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: ${(props) => (props.active ? '600' : '400')};
  transition: all 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  &:focus {
    outline: none;
  }
`

const ThemeDivider = styled.span`
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0.25rem;
`

export default Navigation
