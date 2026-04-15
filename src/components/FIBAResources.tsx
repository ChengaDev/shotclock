import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import SEO from './SEO'
import SeeAlso from './SeeAlso'

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

const FIBAResources = () => {
  const { locals } = useLocalization()

  const resources = [
    {
      ...locals.fibaResourcesCards.rules,
      link: 'https://www.fiba.basketball/rules',
      icon: '📖'
    },
    {
      ...locals.fibaResourcesCards.shotClock,
      link: 'https://www.fiba.basketball/rules/equipment',
      icon: '⏱️'
    },
    {
      ...locals.fibaResourcesCards.training,
      link: 'https://www.fiba.basketball/officials',
      icon: '🎓'
    },
    {
      ...locals.fibaResourcesCards.competition,
      link: 'https://www.fiba.basketball/documents',
      icon: '📋'
    }
  ]

  return (
    <Container>
      <SEO
        title={`${locals.fibaResourcesTitle} | ShotClock Pro`}
        description={locals.fibaResourcesDescription}
      />
      <AnimatedTitle>{locals.fibaResourcesTitle}</AnimatedTitle>

      <Description>
        {locals.fibaResourcesDescription}
      </Description>

      <ResourcesGrid>
        {resources.map((resource, index) => (
          <ResourceCard 
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <ResourceIcon>{resource.icon}</ResourceIcon>
            <ResourceContent>
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
            </ResourceContent>
            <ResourceArrow>→</ResourceArrow>
          </ResourceCard>
        ))}
      </ResourcesGrid>

      <AdditionalInfo>
        <InfoTitle>{locals.additionalInfo.title}</InfoTitle>
        <InfoGrid>
          <InfoCard style={{ animationDelay: '0.8s' }}>
            <InfoIcon>🌍</InfoIcon>
            <InfoText>
              {locals.additionalInfo.worldGoverning}
            </InfoText>
          </InfoCard>
          <InfoCard style={{ animationDelay: '1s' }}>
            <InfoIcon>🏆</InfoIcon>
            <InfoText>
              {locals.additionalInfo.tournaments}
            </InfoText>
          </InfoCard>
        </InfoGrid>
      </AdditionalInfo>
      <SeeAlso exclude={['fiba-resources']} />
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

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 100%;
    margin: 0 auto 3rem auto;
  }
`

const ResourceArrow = styled.span`
  color: ${props => props.theme.accent};
  font-size: 1.5rem;
  transition: transform 0.3s ease;
`

const ResourceCard = styled.a`
  background: ${props => props.theme.cardBackground};
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  border: 1px solid ${props => props.theme.cardBorder};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.accent};

    ${ResourceArrow} {
      transform: translateX(5px);
    }
  }
`

const ResourceIcon = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
`

const ResourceContent = styled.div`
  flex-grow: 1;
`

const ResourceTitle = styled.h3`
  color: ${props => props.theme.titleColor};
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
  font-weight: 600;
`

const ResourceDescription = styled.p`
  color: ${props => props.theme.cardText};
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
`

const AdditionalInfo = styled.div`
  margin-top: 4rem;
`

const InfoTitle = styled.h2`
  color: ${props => props.theme.titleColor};
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.5px;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.6s;
  opacity: 0;
  animation-fill-mode: forwards;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const InfoCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid ${props => props.theme.cardBorder};
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.accent};
  }
`

const InfoIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const InfoText = styled.p`
  color: ${props => props.theme.cardText};
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
`

export default FIBAResources 