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
            <i className="fab fa-linkedin" />
            LinkedIn
          </ContactLink>
          <ContactLink href="https://github.com/ChengaDev/" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-github" />
            GitHub
          </ContactLink>
          <ContactLink href="https://chengazit.com/" target="_blank" rel="noreferrer noopener">
            <i className="fas fa-globe" />
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