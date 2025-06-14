import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'

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
        <FeatureCard>
          <FeatureIcon>🎯</FeatureIcon>
          <FeatureTitle>Professional Training</FeatureTitle>
          <FeatureText>
            Master the art of shot clock operation with our comprehensive training platform.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>Real-time Practice</FeatureTitle>
          <FeatureText>
            Train with realistic game scenarios and improve your response time.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>📚</FeatureIcon>
          <FeatureTitle>FIBA Resources</FeatureTitle>
          <FeatureText>
            Access official FIBA rules and resources to enhance your knowledge.
          </FeatureText>
        </FeatureCard>
      </Features>
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
  background: rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: 0.6s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 215, 0, 0.3);
    background: rgba(0, 0, 0, 0.7);
  }
`

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: #ffd700;
  margin-bottom: 1rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`

const FeatureText = styled.p`
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

export default AboutUs 