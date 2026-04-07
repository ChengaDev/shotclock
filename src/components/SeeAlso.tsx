import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import AppRoutes from '../AppRoutes'

interface SeeAlsoProps {
  exclude?: ('instructions' | 'faq' | 'fiba-resources')[]
}

const SeeAlso: React.FC<SeeAlsoProps> = ({ exclude = [] }) => {
  const { languageCode, locals } = useLocalization()
  const routes = AppRoutes(languageCode)

  const links = [
    { key: 'instructions', label: locals.instructions, to: routes.Instructions },
    { key: 'faq', label: locals.faq, to: routes.FAQ },
    { key: 'fiba-resources', label: locals.fibaResources, to: routes.FIBAResources },
  ].filter(l => !exclude.includes(l.key as any))

  return (
    <Container>
      <Label>See also:</Label>
      {links.map(link => (
        <InternalLink key={link.key} to={link.to}>{link.label}</InternalLink>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.cardBorder};
`

const Label = styled.span`
  color: ${props => props.theme.subtleText};
  font-size: 0.85rem;
`

const InternalLink = styled(Link)`
  color: ${props => props.theme.accent};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.3rem 0.75rem;
  border: 1px solid ${props => props.theme.accent}55;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.accent}18;
    border-color: ${props => props.theme.accent};
  }
`

export default SeeAlso
