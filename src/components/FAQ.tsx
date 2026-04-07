import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import SEO from './SEO'
import SeeAlso from './SeeAlso'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

const FAQ = () => {
  const { locals } = useLocalization()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: locals.faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <Container>
      <SEO
        title="FAQ | ShotClock Pro"
        description="Frequently asked questions about basketball shot clock rules, the 14-second reset, and how to use the ShotClock Pro training simulator."
        schema={faqSchema}
      />

      <AnimatedTitle>{locals.faqTitle}</AnimatedTitle>
      <Description>{locals.faqDescription}</Description>

      <FaqList>
        {locals.faqItems.map((item, index) => (
          <FaqItem key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            <Question onClick={() => toggle(index)} isOpen={openIndex === index}>
              <QuestionText>{item.question}</QuestionText>
              <Chevron isOpen={openIndex === index}>▾</Chevron>
            </Question>
            {openIndex === index && (
              <Answer>{item.answer}</Answer>
            )}
          </FaqItem>
        ))}
      </FaqList>
      <SeeAlso exclude={['faq']} />
    </Container>
  )
}

const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const AnimatedTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.titleColor};
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.5px;
  animation: ${fadeInUp} 0.6s ease-out forwards;

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
  animation: ${fadeInUp} 0.6s ease-out 0.1s forwards;
  opacity: 0;
  animation-fill-mode: forwards;
`

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FaqItem = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.cardBorder};
  overflow: hidden;
  animation: ${fadeInUp} 0.5s ease-out forwards;
  opacity: 0;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.accent};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
`

const Question = styled.button<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1rem;
  background: ${props => props.isOpen ? 'rgba(255, 215, 0, 0.08)' : 'transparent'};
  transition: background 0.2s ease;

  &:focus {
    outline: none;
  }
`

const QuestionText = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${props => props.theme.mainTextColor};
  line-height: 1.4;
`

const Chevron = styled.span<{ isOpen: boolean }>`
  color: ${props => props.theme.accent};
  font-size: 1.3rem;
  flex-shrink: 0;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.25s ease;
  display: inline-block;
`

const Answer = styled.p`
  padding: 0 1.5rem 1.25rem;
  margin: 0;
  color: ${props => props.theme.cardText};
  font-size: 1rem;
  line-height: 1.7;
  border-top: 1px solid ${props => props.theme.cardBorder};
  padding-top: 1rem;
`

export default FAQ
