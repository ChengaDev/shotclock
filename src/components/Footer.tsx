import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DonateButton from './DonateButton'
import LanguageSelector from './LanguageSelector'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import AppRoutes from '../AppRoutes'

const Footer = () => {
  const { locals, languageCode } = useLocalization()
  const routes = AppRoutes(languageCode)

  return (
    <Container>
      <FooterContent>
        <FooterSection>
          <FooterTitle>ShotClock Pro</FooterTitle>
          <FooterText>
            {locals.aboutContent[0]}
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterNavLink to={routes.Instructions}>{locals.instructions}</FooterNavLink>
            <FooterNavLink to={routes.FIBAResources}>{locals.fibaResources}</FooterNavLink>
            <FooterNavLink to={routes.FAQ}>{locals.faq}</FooterNavLink>
            <FooterNavLink to={routes.About}>{locals.about}</FooterNavLink>
            <FooterNavLink to="/privacy-policy">Privacy Policy</FooterNavLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Language</FooterTitle>
          <LanguageSelector />
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} ShotClock Pro. Created by{' '}
          <FooterLink href="https://linkedin.com/in/chengazit" target="_blank" rel="noreferrer">
            Chen Gazit
          </FooterLink>
        </Copyright>
        <DonateButton />
      </FooterBottom>
    </Container>
  )
}

const Container = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 0 1rem;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FooterTitle = styled.h3`
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const footerLinkStyles = `
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
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
`

const FooterNavLink = styled(Link)`
  ${footerLinkStyles}
`

const FooterLink = styled.a`
  ${footerLinkStyles}
`

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0;
`

export default Footer
