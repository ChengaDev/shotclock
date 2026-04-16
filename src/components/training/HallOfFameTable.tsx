import React from 'react'
import styled from 'styled-components'
import { HallOfFameEntry } from '../../services/hallOfFameService'
import { useLocalization } from '../../contexts/Language/LanguageProvider'

interface HallOfFameTableProps {
  entries: HallOfFameEntry[]
  highlightScore?: number
}

const HallOfFameTable: React.FC<HallOfFameTableProps> = ({ entries, highlightScore }) => {
  const { locals } = useLocalization()

  if (entries.length === 0) {
    return (
      <EmptyMessage>No entries yet. Be the first to make the Hall of Fame!</EmptyMessage>
    )
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th>#</Th>
          <Th>Initials</Th>
          <Th>Score</Th>
          <Th>Grade</Th>
          <Th>Difficulty</Th>
          <Th>Date</Th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => {
          const isNew = highlightScore !== undefined && entry.score === highlightScore
          return (
            <Tr key={index} $highlight={isNew}>
              <Td>{index + 1}</Td>
              <TdInitials>{entry.initials}</TdInitials>
              <TdScore>{entry.score}</TdScore>
              <Td>{entry.grade}</Td>
              <TdDifficulty $difficulty={entry.difficulty}>{entry.difficulty}</TdDifficulty>
              <Td>{new Date(entry.date).toLocaleDateString()}</Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

const EmptyMessage = styled.p`
  text-align: center;
  color: ${props => props.theme.subtleText};
  font-size: 0.95rem;
  padding: 1rem;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`

const Th = styled.th`
  text-align: left;
  padding: 0.6rem 0.75rem;
  color: ${props => props.theme.subtleText};
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${props => props.theme.cardBorder};
`

const Tr = styled.tr<{ $highlight?: boolean }>`
  background: ${props => props.$highlight ? 'rgba(255, 215, 0, 0.12)' : 'transparent'};
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.$highlight ? 'rgba(255, 215, 0, 0.18)' : props.theme.cardBackground};
  }
`

const Td = styled.td`
  padding: 0.6rem 0.75rem;
  color: ${props => props.theme.cardText};
  border-bottom: 1px solid ${props => props.theme.cardBorder}55;
`

const TdInitials = styled(Td)`
  font-family: 'DSEG14ClassicRegular', monospace;
  font-weight: 700;
  color: ${props => props.theme.accent};
  letter-spacing: 0.1em;
`

const TdScore = styled(Td)`
  font-weight: 700;
  color: ${props => props.theme.titleColor};
  font-size: 1rem;
`

const TdDifficulty = styled(Td)<{ $difficulty: string }>`
  text-transform: capitalize;
  color: ${props =>
    props.$difficulty === 'pro' ? '#ff6b6b' :
    props.$difficulty === 'medium' ? '#FF9800' :
    '#4CAF50'
  };
  font-weight: 600;
`

export default HallOfFameTable
