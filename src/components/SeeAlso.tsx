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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const Label = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
`

const InternalLink = styled(Link)`
  color: #ffd700;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.3rem 0.75rem;
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;
    color: #ffd700;
  }
`

export default SeeAlso
