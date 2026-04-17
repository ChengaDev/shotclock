import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import SEO from './SEO'
import SeeAlso from './SeeAlso'

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
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
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <Container>
      <SEO
        title={`${locals.faqTitle} | ShotClock Pro`}
        description={locals.faqDescription}
        schema={faqSchema}
      />

      <PageHeader>
        <PageTitle>{locals.faqTitle}</PageTitle>
        <PageSubtitle>{locals.faqDescription}</PageSubtitle>
      </PageHeader>

      <FaqList>
        {locals.faqItems.map((item, index) => (
          <FaqItem key={index} $delay={0.05 + index * 0.04} $open={openIndex === index}>
            <Question onClick={() => toggle(index)} $open={openIndex === index}>
              <QuestionText>{item.question}</QuestionText>
              <ChevronIcon $open={openIndex === index}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </ChevronIcon>
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
  max-width: 820px;
  margin: 0 auto;
  padding: 0.5rem 0 2rem;
`

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  animation: ${slideUp} 0.5s ease-out both;
`

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  margin: 0 0 0.5rem;
  background: linear-gradient(135deg, ${props => props.theme.titleColor} 20%, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const PageSubtitle = styled.p`
  color: ${props => props.theme.subtleText};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`

const FaqItem = styled.div<{ $delay: number; $open: boolean }>`
  background: ${props => props.theme.cardBackground};
  border-radius: 16px;
  border: 1px solid ${props => props.$open ? `${props.theme.accent}55` : props.theme.cardBorder};
  overflow: hidden;
  animation: ${slideUp} 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$delay}s both;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  box-shadow: ${props => props.$open ? `0 4px 20px ${props.theme.accent}14` : 'none'};

  &:hover {
    border-color: ${props => props.$open ? `${props.theme.accent}55` : `${props.theme.accent}33`};
  }
`

const Question = styled.button<{ $open: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: ${props => props.$open ? `${props.theme.accent}0a` : 'transparent'};
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1rem;
  transition: background 0.2s ease;

  &:focus { outline: none; }
`

const QuestionText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme.titleColor};
  line-height: 1.4;
`

const ChevronIcon = styled.span<{ $open: boolean }>`
  color: ${props => props.theme.accent};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  transform: ${props => props.$open ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.25s ease;
`

const Answer = styled.p`
  padding: 0 1.5rem 1.25rem;
  padding-top: 0.75rem;
  margin: 0;
  color: ${props => props.theme.cardText};
  font-size: 0.95rem;
  line-height: 1.75;
  border-top: 1px solid ${props => props.theme.cardBorder};
`

export default FAQ
