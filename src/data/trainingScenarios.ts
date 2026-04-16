export type CorrectAction = 'startstop' | 'reset14' | 'reset24'
export type Grade = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F'

export type Scenario = {
  id: string
  description: string         // Phase 1 prose (English only)
  flashLabel: string          // Phase 2 bold event word (English only)
  flashColor: string
  correctAction: CorrectAction
  clockIsRunning: boolean     // Mini-clock state in Phase 2
  clockDisplaySeconds: number // Value shown on mini-clock
  explanation: string         // Shown after answer (English only)
}

export type ScenarioResult = {
  scenarioId: string
  correct: boolean
  reactionMs: number   // 0 if timed out
  grade: Grade
  score: number
}

export const scenarios: Scenario[] = [
  {
    id: 'throw-in-start',
    description:
      'A team was awarded a throw-in after the ball went out of bounds. The shot clock is stopped and shows 24 seconds. The referee hands the ball to the player for the throw-in. The throw-in player touches the ball on the court.',
    flashLabel: 'THROW-IN',
    flashColor: '#4CAF50',
    correctAction: 'startstop',
    clockIsRunning: false,
    clockDisplaySeconds: 24,
    explanation:
      'When the ball is legally touched in-bounds on a throw-in, the shot clock must START immediately. Press Start/Stop to begin the count.',
  },
  {
    id: 'offensive-rebound',
    description:
      'The offensive team has possession and the shot clock is running at 11 seconds. A player shoots; the ball hits the rim and the same offensive team grabs the rebound.',
    flashLabel: 'OFF. REBOUND',
    flashColor: '#FF9800',
    correctAction: 'reset14',
    clockIsRunning: true,
    clockDisplaySeconds: 11,
    explanation:
      'After an offensive rebound where the ball touched the ring, the shot clock resets to 14 seconds per FIBA rules. The clock keeps running after the reset.',
  },
  {
    id: 'team-gains-control',
    description:
      'A jump ball situation was called. The shot clock is stopped at 6 seconds. After the tip, Team A gains clear control of the ball.',
    flashLabel: 'TEAM CONTROL',
    flashColor: '#4CAF50',
    correctAction: 'reset24',
    clockIsRunning: false,
    clockDisplaySeconds: 6,
    explanation:
      'When a team gains control from a jump ball, the shot clock resets to 24 seconds. Start the clock once the team establishes control.',
  },
  {
    id: 'defense-foul-frontcourt-lt14',
    description:
      'The offensive team has been attacking with the shot clock at 9 seconds. A defensive foul is called in the frontcourt while the offensive team is in a shooting position. The ball will be inbounded in the frontcourt.',
    flashLabel: 'FOUL – FRONTCOURT',
    flashColor: '#F44336',
    correctAction: 'reset14',
    clockIsRunning: false,
    clockDisplaySeconds: 9,
    explanation:
      'When a defensive foul is called in the frontcourt and the remaining shot clock time is less than 14 seconds, the clock resets to 14 seconds to give the offense a fair opportunity.',
  },
  {
    id: 'defense-foul-backcourt',
    description:
      'The ball was inbounded from the backcourt. A defensive foul is committed in the backcourt. The shot clock shows 17 seconds and is stopped.',
    flashLabel: 'FOUL – BACKCOURT',
    flashColor: '#F44336',
    correctAction: 'reset24',
    clockIsRunning: false,
    clockDisplaySeconds: 17,
    explanation:
      'When a defensive foul is called in the backcourt, the shot clock always resets to 24 seconds regardless of how much time remained.',
  },
  {
    id: 'offense-out-of-bounds',
    description:
      'The offensive team is advancing up the court. The shot clock shows 14 seconds and is running. An offensive player steps out of bounds while holding the ball.',
    flashLabel: 'OUT – OFFENSE',
    flashColor: '#F44336',
    correctAction: 'reset24',
    clockIsRunning: false,
    clockDisplaySeconds: 14,
    explanation:
      'When the offensive team causes the ball to go out of bounds, possession is awarded to the defense. The new possession starts with a full 24-second shot clock.',
  },
  {
    id: 'defense-out-of-bounds',
    description:
      'The offense has the ball in the frontcourt and the shot clock reads 8 seconds. A defensive player tips the ball out of bounds. The offense will retain possession and inbound from the sideline in the frontcourt.',
    flashLabel: 'OUT – DEFENSE',
    flashColor: '#2196F3',
    correctAction: 'reset14',
    clockIsRunning: false,
    clockDisplaySeconds: 8,
    explanation:
      'When the defense causes the ball to go out of bounds in the frontcourt and less than 14 seconds remain, the shot clock resets to 14 seconds. The offense retains possession.',
  },
  {
    id: 'free-throw-sequence',
    description:
      'A foul was called that results in free throws. The shot clock is stopped at 20 seconds. Before the first free throw is taken, the shot clock operator must prepare for the free throw sequence.',
    flashLabel: 'FREE THROWS',
    flashColor: '#9C27B0',
    correctAction: 'reset24',
    clockIsRunning: false,
    clockDisplaySeconds: 20,
    explanation:
      'Before a free throw sequence begins, the shot clock is reset to 24 seconds. The clock will start when the last free throw is missed and the ball is touched by a player.',
  },
  {
    id: 'free-throw-rebound',
    description:
      'The last free throw has been shot and missed. The shot clock reads 24 and is running. The offensive team grabs the rebound on the missed last free throw.',
    flashLabel: 'FT REBOUND',
    flashColor: '#FF9800',
    correctAction: 'reset14',
    clockIsRunning: true,
    clockDisplaySeconds: 24,
    explanation:
      'If the offensive team rebounds a missed last free throw, the shot clock resets to 14 seconds (same as an offensive rebound after a shot that touched the ring).',
  },
  {
    id: 'free-throw-made',
    description:
      'The last free throw was made and scored. The defending team will now inbound the ball from under the basket. The shot clock shows 24 and is stopped.',
    flashLabel: 'FT – SCORED',
    flashColor: '#4CAF50',
    correctAction: 'reset24',
    clockIsRunning: false,
    clockDisplaySeconds: 24,
    explanation:
      'After a made last free throw, the opposing team inbounds the ball. This is a new possession, so the shot clock is confirmed at 24 seconds and starts when the ball is touched in bounds.',
  },
  {
    id: 'shot-clock-expires',
    description:
      'The shot clock is running and reaches zero. The buzzer sounds. The ball is still in the hands of the offensive player — it was not released before the buzzer.',
    flashLabel: 'VIOLATION',
    flashColor: '#F44336',
    correctAction: 'startstop',
    clockIsRunning: true,
    clockDisplaySeconds: 0,
    explanation:
      'A shot clock violation is called. The operator must STOP the clock. The defense gains possession with a 24-second reset.',
  },
  {
    id: 'held-ball',
    description:
      'The ball is held simultaneously by players from both teams. The referee signals a held ball. The shot clock is stopped at 15 seconds. After the jump ball, Team B tips the ball and gains control.',
    flashLabel: 'HELD BALL',
    flashColor: '#9C27B0',
    correctAction: 'reset24',
    clockIsRunning: false,
    clockDisplaySeconds: 15,
    explanation:
      'When a new team gains possession from a held-ball (jump ball) situation, the shot clock resets to 24 seconds for the new possession.',
  },
]
