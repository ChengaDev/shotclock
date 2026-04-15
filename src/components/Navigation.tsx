import styled, { keyframes } from 'styled-components'
import Themes from '../constants/Themes'
import AppRoutes from '../AppRoutes'
import { Link, useLocation } from 'react-router-dom'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import { useState, useRef, useEffect } from 'react'

type NavigationProps = {
  currentTheme: string
  setTheme: (theme: string) => void
}

const Navigation = ({ currentTheme, setTheme }: NavigationProps) => {
  const location = useLocation()
  const { locals, languageCode } = useLocalization()
  const routes = AppRoutes(languageCode)
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
    <NavBar ref={navRef}>
      <Brand to={routes.Home}>
        <BrandText>ShotClock Pro</BrandText>
      </Brand>
      <Hamburger
        onClick={() => setExpanded(!expanded)}
        aria-label="Toggle navigation"
        aria-expanded={expanded}
        aria-controls="nav-menu"
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>
      <NavCollapse id="nav-menu" $expanded={expanded}>
        <NavItems>
          <NavLink
            to={routes.Home}
            $active={location.pathname === routes.Home}
            onClick={handleNavClick}
          >
            {locals.home}
          </NavLink>
          <NavLink
            to={routes.Instructions}
            $active={location.pathname === routes.Instructions}
            onClick={handleNavClick}
          >
            {locals.instructions}
          </NavLink>
          <NavLink
            to={routes.FIBAResources}
            $active={location.pathname === routes.FIBAResources}
            onClick={handleNavClick}
          >
            {locals.fibaResources}
          </NavLink>
          <NavLink
            to={routes.About}
            $active={location.pathname === routes.About}
            onClick={handleNavClick}
          >
            {locals.about}
          </NavLink>
          <NavLink
            to={routes.FAQ}
            $active={location.pathname === routes.FAQ}
            onClick={handleNavClick}
          >
            {locals.faq}
          </NavLink>
          <ThemeToggle>
            <ThemeButton
              $active={currentTheme === Themes.Light}
              onClick={() => setTheme(Themes.Light)}
            >
              {locals.lightMode}
            </ThemeButton>
            <ThemeDivider>|</ThemeDivider>
            <ThemeButton
              $active={currentTheme === Themes.Dark}
              onClick={() => setTheme(Themes.Dark)}
            >
              {locals.darkMode}
            </ThemeButton>
          </ThemeToggle>
        </NavItems>
      </NavCollapse>
    </NavBar>
  )
}

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 70px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  font-family: 'Poppins', sans-serif;
`

const Brand = styled(Link)`
  font-size: 1.8rem;
  line-height: 1.5;
  text-decoration: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const BrandText = styled.span`
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(45deg, #ffd700, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  margin-left: auto;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const HamburgerLine = styled.span`
  display: block;
  width: 22px;
  height: 2px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
`

const NavCollapse = styled.div<{ $expanded: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.$expanded ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 0 0 1rem 1rem;
    padding: 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    animation: ${slideDown} 0.35s ease-out;
  }
`

const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const NavLink = styled(Link)<{ $active: boolean }>`
  color: #ffffff;
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
    width: ${(props) => (props.$active ? '100%' : '0')};
    height: 2px;
    bottom: 0;
    left: 0;
    background: #ffd700;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffd700;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    width: 100%;
    background: ${(props) => (props.$active ? 'rgba(255, 255, 255, 0.1)' : 'transparent')};

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
    width: 100%;
  }
`

const ThemeButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.$active ? '#ffd700' : '#ffffff')};
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: ${(props) => (props.$active ? '600' : '400')};
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
