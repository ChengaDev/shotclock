import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import AppRoutes from '../AppRoutes'

const NotFound = () => {
  const { languageCode } = useLocalization()
  const routes = AppRoutes(languageCode)

  return (
    <Container>
      <Helmet>
        <title>Page Not Found | ShotClock Pro</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Code>404</Code>
      <Message>Page not found</Message>
      <Sub>The page you're looking for doesn't exist.</Sub>
      <Links>
        <NavLink to={routes.Home}>Shot Clock</NavLink>
        <NavLink to={routes.Instructions}>Instructions</NavLink>
        <NavLink to={routes.FAQ}>FAQ</NavLink>
        <NavLink to={routes.FIBAResources}>FIBA Resources</NavLink>
      </Links>
    </Container>
  )
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out forwards;
`

const Code = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  background: linear-gradient(45deg, #ffd700, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1;
`

const Message = styled.h2`
  color: ${props => props.theme.titleColor};
  font-size: 1.8rem;
  margin: 1rem 0 0.5rem;
`

const Sub = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  margin-bottom: 2.5rem;
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`

const NavLink = styled(Link)`
  color: #ffd700;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
  border: 1px solid rgba(255, 215, 0, 0.4);
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;
    color: #ffd700;
  }
`

export default NotFound
