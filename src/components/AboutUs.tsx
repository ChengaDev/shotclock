import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import SEO from './SEO'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const AboutUs = () => {
  const { locals } = useLocalization()

  return (
    <Container>
      <SEO
        title="About Us | ShotClock Pro"
        description="Learn about ShotClock Pro – a free basketball shot clock training app built for referees, scorekeepers, and basketball enthusiasts who want to master FIBA shot clock rules."
      />
      <AnimatedTitle>{locals.aboutTitle}</AnimatedTitle>

      <Content>
        {locals.aboutContent.map((paragraph, index) => (
          <AnimatedParagraph key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            {paragraph}
          </AnimatedParagraph>
        ))}
      </Content>

      <Description>
        {locals.aboutDescription}
      </Description>

      <Features>
        {locals.featureCards.map((card, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{['🎯', '⚡', '📚'][index]}</FeatureIcon>
            <FeatureTitle>{card.title}</FeatureTitle>
            <FeatureText>{card.text}</FeatureText>
          </FeatureCard>
        ))}
      </Features>

      <ContactSection>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactText>
          Questions, feedback, or just want to say hi? Reach out through any of the channels below.
        </ContactText>
        <ContactLinks>
          <ContactLink href="https://www.linkedin.com/in/chengazit/" target="_blank" rel="noreferrer noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </ContactLink>
          <ContactLink href="https://github.com/ChengaDev/" target="_blank" rel="noreferrer noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </ContactLink>
          <ContactLink href="https://chengazit.com/" target="_blank" rel="noreferrer noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 21.945V18h2v3.945A10.02 10.02 0 0 1 12 22a10.02 10.02 0 0 1-1-.055zM11 2.055V6H9.07A10.014 10.014 0 0 1 11 2.055zm2 0A10.014 10.014 0 0 1 14.93 6H13V2.055zM8 8h8a10 10 0 0 1 .38 2H7.62A10 10 0 0 1 8 8zm-.38 4h8.76a10 10 0 0 1-.38 2H8a10 10 0 0 1-.38-2zm.76 4h7.24A10.014 10.014 0 0 1 13 18.93V16h-2v2.93A10.014 10.014 0 0 1 8.38 16zM4.07 14H6v-2H4.07A8.02 8.02 0 0 1 4 12c0-.34.024-.673.07-1H6V9H4.07A10.014 10.014 0 0 1 7.07 6H8v2h8V6h.93a10.014 10.014 0 0 1 3 3H20V8h1.93c.046.327.07.66.07 1a8.02 8.02 0 0 1-.07 1H20v2h1.93A10.014 10.014 0 0 1 18.93 14H18V8H6v6H4.07z"/></svg>
            chengazit.com
          </ContactLink>
        </ContactLinks>
      </ContactSection>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const AnimatedTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.titleColor};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Content = styled.div`
  margin-bottom: 3rem;
`

const AnimatedParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
  text-align: justify;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Description = styled.p`
  text-align: center;
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
`

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const FeatureCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.cardBorder};
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: 0.6s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.accent};
  }
`

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.titleColor};
  margin-bottom: 1rem;
  font-weight: 600;
`

const FeatureText = styled.p`
  color: ${props => props.theme.cardText};
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
`

const ContactSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`

const ContactTitle = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.titleColor};
  margin-bottom: 1rem;
  font-weight: 700;
`

const ContactText = styled.p`
  color: ${props => props.theme.cardText};
  font-size: 1rem;
  margin-bottom: 2rem;
`

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.accent}88;
  color: ${props => props.theme.accent};
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.accent}18;
    border-color: ${props => props.theme.accent};
  }
`

export default AboutUs 