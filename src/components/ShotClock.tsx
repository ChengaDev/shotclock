import React, { useState, useRef, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Controls from './Controls';
import Correction from './Correction';
import ShotClockReset from '../Constants';
import { useSpring, animated } from 'react-spring';
import { useLocalization } from '../contexts/Language/LanguageProvider';
import { formatKey } from '../constants/defaultKeyBindings';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import { useKeyBindings } from '../contexts/KeyBindings/KeyBindingsProvider';

const ShotClock = () => {
	const { locals } = useLocalization();
	const buzzerSoundElementRef = useRef<HTMLAudioElement>(null);

	const [currentSeconds, setCurrentSeconds] = useState<number>(ShotClockReset.BackCountPosition);
	const [currentTenths, setCurrentTenths] = useState<number>(9);
	const [isTicking, setIsTicking] = useState<boolean>(false);
	const [isTimeDisplay, setIsTimeDisplay] = useState<boolean>(true);
	const [tickInterval, setTickInterval] = useState<any>(null);
	const [timeReset, setTimeReset] = useState<boolean>(true);
	const { keyBindings } = useKeyBindings();

	const secondsRef = useRef<number>();
	const isTickingRef = useRef<boolean>();
	const intervalRef = useRef<any>();
	const lastSecondTimestampRef = useRef<number>(0);
	const pausedElapsedRef = useRef<number>(0);

	secondsRef.current = currentSeconds;
	isTickingRef.current = isTicking;
	intervalRef.current = tickInterval;

	const incrementSecond = useCallback(() => {
		if (currentSeconds < ShotClockReset.BackCountPosition && !isTickingRef.current) {
			setCurrentSeconds(currentSeconds + 1);
			setCurrentTenths(9);
			pausedElapsedRef.current = 0;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTickingRef.current, currentSeconds]);

	const decrementSecond = useCallback(() => {
		if (currentSeconds > 0 && !isTickingRef.current) {
			setCurrentSeconds(currentSeconds - 1);
			setCurrentTenths(9);
			pausedElapsedRef.current = 0;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTickingRef.current, currentSeconds]);

	const on14SecondsClick = useCallback(() => {
		setTimeReset(true);
		if (!isTickingRef.current && intervalRef.current) {
			clearInterval(intervalRef.current);
			setTickInterval(null);
		}
		if (isTickingRef.current) {
			lastSecondTimestampRef.current = Date.now();
		}
		pausedElapsedRef.current = 0;
		setIsTimeDisplay(true);
		setCurrentSeconds(ShotClockReset.FrontCountPosition);
		setCurrentTenths(9);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTickingRef.current, intervalRef.current]);

	const on24SecondsClick = useCallback(() => {
		setTimeReset(true);
		if (!isTickingRef.current && intervalRef.current) {
			clearInterval(intervalRef.current);
			setTickInterval(null);
		}
		if (isTickingRef.current) {
			lastSecondTimestampRef.current = Date.now();
		}
		pausedElapsedRef.current = 0;
		setIsTimeDisplay(true);
		setCurrentSeconds(ShotClockReset.BackCountPosition);
		setCurrentTenths(9);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTickingRef.current, intervalRef.current]);

	const onHornClick = useCallback(() => {
		buzzerSoundElementRef.current?.play();
	}, []);

	const onTickToggle = () => {
		if (!isTickingRef.current) {
			if (!intervalRef.current) {
				if (currentSeconds === ShotClockReset.BackCountPosition && timeReset) {
					setCurrentSeconds(23);
					setTimeReset(false);
				} else if (currentSeconds === ShotClockReset.FrontCountPosition && timeReset) {
					setCurrentSeconds(13);
					setTimeReset(false);
				}
				lastSecondTimestampRef.current = Date.now();
				const interval = setInterval(tickIntervalHandler, 100);
				setTickInterval(interval);
			} else {
				// Resuming — restore the elapsed position within the current second
				lastSecondTimestampRef.current = Date.now() - pausedElapsedRef.current;
			}
			setIsTimeDisplay(true);
		} else {
			// Pausing — save how far into the current second we are
			pausedElapsedRef.current = Date.now() - lastSecondTimestampRef.current;
		}
		setIsTicking(!isTickingRef.current);
	};

	const toggleDisplay = () => {
		setIsTimeDisplay(!isTimeDisplay);
	};

	const tickIntervalHandler = () => {
		if (!isTickingRef.current) return;

		const currentSecondsValue = secondsRef.current ?? 0;
		const elapsed = Date.now() - lastSecondTimestampRef.current;

		// Show tenths when below 5 seconds (including the 0.x countdown)
		if (currentSecondsValue < 5) {
			setCurrentTenths(Math.max(0, 9 - Math.floor(elapsed / 100)));
		}

		// Decrement seconds once 1000ms has elapsed
		if (elapsed >= 1000) {
			lastSecondTimestampRef.current += 1000;

			if (currentSecondsValue === 0) {
				// Buzzer fires after the 0.x second finishes
				buzzerSoundElementRef.current?.play();
				setIsTicking(false);
				clearInterval(intervalRef.current);
				setTickInterval(null);
				setCurrentTenths(0);
			} else {
				const newSeconds = currentSecondsValue - 1;
				setCurrentSeconds(newSeconds);
				if (newSeconds < 5) {
					// Reset timestamp precisely so first tenths tick reads 0ms elapsed → shows 4.9
					lastSecondTimestampRef.current = Date.now();
					setCurrentTenths(9);
				}
			}
		}
	};

	useKeyboardShortcuts(keyBindings, {
		onHorn: onHornClick,
		onStartStop: onTickToggle,
		onReset14: on14SecondsClick,
		onReset24: on24SecondsClick,
		onClear: toggleDisplay,
		onIncrementSecond: incrementSecond,
		onDecrementSecond: decrementSecond,
	});

	const titleAnimationProps = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 1000 }
	});

	const timeDisplayAnimationProps = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 2000 }
	});

	const showTenths = currentSeconds < 5;
	const timeDisplayText = showTenths
		? `${currentSeconds}.${currentTenths}`
		: (currentSeconds > 9 ? `${currentSeconds}` : `0${currentSeconds}`);

	return (
		<DeviceFrame>
		<DeviceInner>
		<ShotClockWrapper>
			<audio
				loop={false}
				ref={buzzerSoundElementRef}
				src='/BuzzerShort.mp3'
				style={{ display: 'none' }}
			></audio>

			<animated.div style={titleAnimationProps}>
				<Title>{locals.title}</Title>
				<SubTitle>{locals.subtitle}</SubTitle>
			</animated.div>
			<animated.div style={timeDisplayAnimationProps}>
				<LayoutGrid>
					{/* display spans cols 1-2 */}
					<DisplayCell>
						<DisplayRow>
							<TimeDisplay $isClockEnded={currentSeconds === 0 && !isTicking} $markSeconds={currentSeconds < 5}>
								<FakeDigitsDisplay>{showTenths ? '8.8' : '88'}</FakeDigitsDisplay>
								{isTimeDisplay ? timeDisplayText : ''}
							</TimeDisplay>
							<StatusLed $running={isTicking} />
						</DisplayRow>
					</DisplayCell>

					{/* clear: col 3, row 1 */}
					<ClearCell>
						<Controls
							isTicking={isTicking}
							on14SecondsClick={on14SecondsClick}
							on24SecondsClick={on24SecondsClick}
							onTickToggle={onTickToggle}
							toggleDisplay={toggleDisplay}
							layout="clearOnly"
							keyLabels={{ clear: keyBindings.clear }}
						/>
					</ClearCell>

					{/* horn: col 1, row 2 */}
					<HornCell>
						<HornButton onClick={onHornClick}>
							<HornIcon />
							{keyBindings.horn && <HornKeyHint>{formatKey(keyBindings.horn)}</HornKeyHint>}
						</HornButton>
					</HornCell>

					{/* correction: col 2, row 2 */}
					<CorrCell>
						<Correction
							decrementSecond={decrementSecond}
							incrementSecond={incrementSecond}
							keyLabels={{
								increment: keyBindings.incrementSecond,
								decrement: keyBindings.decrementSecond,
							}}
						/>
					</CorrCell>

					{/* start: col 1, row 3 */}
					<StartCell>
						<Controls
							isTicking={isTicking}
							on14SecondsClick={on14SecondsClick}
							on24SecondsClick={on24SecondsClick}
							onTickToggle={onTickToggle}
							toggleDisplay={toggleDisplay}
							layout="startOnly"
							keyLabels={{ startStop: keyBindings.startStop }}
						/>
					</StartCell>

					{/* reset 14s: col 2, row 3 */}
					<Reset14Cell>
						<Controls
							isTicking={isTicking}
							on14SecondsClick={on14SecondsClick}
							on24SecondsClick={on24SecondsClick}
							onTickToggle={onTickToggle}
							toggleDisplay={toggleDisplay}
							layout="reset14Only"
							keyLabels={{ reset14: keyBindings.reset14 }}
						/>
					</Reset14Cell>

					{/* reset poss: col 3, row 3 */}
					<Reset24Cell>
						<Controls
							isTicking={isTicking}
							on14SecondsClick={on14SecondsClick}
							on24SecondsClick={on24SecondsClick}
							onTickToggle={onTickToggle}
							toggleDisplay={toggleDisplay}
							layout="reset24Only"
							keyLabels={{ reset24: keyBindings.reset24 }}
						/>
					</Reset24Cell>
				</LayoutGrid>
			</animated.div>
		</ShotClockWrapper>
		</DeviceInner>
		</DeviceFrame>
	);
};

type TimeDisplayProps = {
	$markSeconds: boolean;
	$isClockEnded: boolean;
};

const BaseTimeDisplay = styled.div`
	font-family: 'DSEG14ClassicRegular';
	font-weight: normal;
	font-style: normal;
	font-size: 42px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 130px;
	height: 95px;
	padding: 14px;
	margin: 0 auto;
	margin-bottom: 20px;

	@media ${'(min-width: 768px)'} {
		font-size: 46px;
		width: 140px;
		height: 103px;
		padding: 15px;
	}

	@media ${'(min-width: 1200px)'} {
		font-size: 58px;
		width: 180px;
		height: 130px;
		padding: 20px;
	}

	@media ${(props) => props.theme.mediaQueries.mobile} {
		font-size: 30px;
		width: 90px;
		height: 70px;
		padding: 10px;
		margin-bottom: 20px;
	}
`;

const TimeDisplay = styled(BaseTimeDisplay)<TimeDisplayProps>`
	border: 4px solid ${(props) => (props.$isClockEnded ? props.theme.colors.red : '#8993a3')};
	border-radius: 10px;
	color: ${(props) => (props.$markSeconds ? props.theme.colors.red : props.theme.colors.white)};
	margin: 0;

	position: relative;
	background: transparent linear-gradient(134deg, #1d1b1b 0%, #383834 55%, #1d1d1b 55%, #1d1d1b 100%) 0% 0% no-repeat
		padding-box;

	@media ${'(min-width: 1000px)'} {
		margin-bottom: 30px;
		margin-top: 30px;
	}
`;

const FakeDigitsDisplay = styled(BaseTimeDisplay)`
	color: ${(props) => props.theme.colors.gray};
	position: absolute;
	opacity: 0.25;
	inset: 0;
	width: auto;
	height: auto;
	margin: 0;
`;

const Title = styled.h1`
	width: 100%;
	font-size: 35px;
	color: ${(props) => props.theme.mainTextColor};
	margin-top: 0;
	margin-bottom: 50px;
	text-align: center;
	position: absolute;
	width: 0;
	margin: 0;
	padding: 0;
	height: 0;
	visibility: hidden;

	@media ${'(min-width: 770px)'} {
		font-size: 40px;
	}

	@media ${(props) => props.theme.mediaQueries.mobile} {
		font-size: 20px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
`;

const SubTitle = styled.h2`
	position: absolute;
	width: 0;
	margin: 0;
	padding: 0;
	height: 0;
	visibility: hidden;
`;

const LayoutGrid = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-areas:
		"horn   display  clear"
		".      corr     ."
		"start  reset14  reset24";
	column-gap: 120px;
	row-gap: 40px;
	justify-content: center;
	align-items: center;

	@media ${'(max-width: 1199px)'} {
		row-gap: 20px;
	}

	@media ${(props) => props.theme.mediaQueries.mobile} {
		row-gap: 12px;
		column-gap: 16px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			"horn    display  clear"
			"corr    corr     corr"
			"start   reset14  reset24";
	}
`;

const DisplayCell  = styled.div`
	grid-area: display;
	& > * { margin-bottom: 0 !important; margin-top: 0 !important; }
`

const DisplayRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`

const ledPulse = keyframes`
	0%, 100% { box-shadow: 0 0 4px 1px currentColor; }
	50%       { box-shadow: 0 0 10px 3px currentColor; }
`

const StatusLed = styled.div<{ $running: boolean }>`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	position: absolute;
	right: -8px;

	@media ${'(orientation: portrait)'} {
		width: 7px;
		height: 7px;
		right: -16px;
	}

	@media ${'(orientation: landscape) and (max-height: 500px)'} {
		right: 9px;
	}
	top: 50%;
	transform: translateY(-50%);
	background: ${props => props.$running ? '#22c55e' : '#ef4444'};
	color: ${props => props.$running ? '#22c55e' : '#ef4444'};
	box-shadow: 0 0 6px 2px currentColor;
	animation: ${props => props.$running ? css`${ledPulse} 1.2s ease-in-out infinite` : 'none'};
	transition: background 0.3s ease, box-shadow 0.3s ease;
`
const ClearCell    = styled.div`
	grid-area: clear;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const CorrCell     = styled.div`
	grid-area: corr;
	display: flex;
	justify-content: center;
	& > * { margin-bottom: 0 !important; margin-top: 0 !important; }

	@media ${(props) => props.theme.mediaQueries.mobile} {
		margin-top: 20px;
	}
`;
const HornCell     = styled.div`
	grid-area: horn;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StartCell    = styled.div`
	grid-area: start;
	@media ${(props) => props.theme.mediaQueries.mobile} { margin-top: 20px; }
`;
const Reset14Cell  = styled.div`
	grid-area: reset14;
	@media ${(props) => props.theme.mediaQueries.mobile} { margin-top: 20px; }
`;
const Reset24Cell  = styled.div`
	grid-area: reset24;
	@media ${(props) => props.theme.mediaQueries.mobile} { margin-top: 20px; }
`;

const HornButton = styled.button`
	font-size: 14px;
	height: 80px;
	width: 80px;
	padding: 10px;
	border: 4px solid ${(props) => props.theme.colors.white};
	background: ${(props) => props.theme.defaulButtonBackground};
	outline: none;
	border-radius: 20px;
	cursor: pointer;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform 0.08s ease, box-shadow 0.08s ease;

	&:active {
		transform: scale(0.92) translateY(2px);
		box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.35);
	}

	@media ${'(min-width: 768px)'} {
		height: 100px;
		width: 100px;
	}

	@media ${'(min-width: 1200px)'} {
		height: 130px;
		width: 130px;
	}

	@media ${(props) => props.theme.mediaQueries.mobile} {
		margin: 0 auto;
		height: 70px;
		width: 70px;
	}
`;

const DeviceFrame = styled.div`
	display: block;
	width: fit-content;
	background: linear-gradient(160deg, #2a2a2e 0%, #1a1a1d 60%, #222226 100%);
	border-radius: 28px;
	border: 3px solid #444;
	box-shadow:
		0 0 0 1px #111,
		0 8px 40px rgba(0, 0, 0, 0.6),
		inset 0 1px 0 rgba(255, 255, 255, 0.06);
	padding: 28px 36px;
	margin: 0 auto;
	position: relative;

	&::before {
		content: 'ShotClock Pro';
		display: block;
		text-align: center;
		font-size: 0.6rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.25);
		margin-bottom: 18px;
	}

	@media ${(props) => props.theme.mediaQueries.mobile} {
		padding: 20px 16px;
		border-radius: 20px;

		&::before {
			margin-bottom: 12px;
		}
	}
`

const DeviceInner = styled.div`
	background: linear-gradient(180deg, #111113 0%, #1c1c1f 100%);
	border-radius: 16px;
	border: 1.5px solid #333;
	padding: 24px 28px;
	box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.5);

	@media ${(props) => props.theme.mediaQueries.mobile} {
		padding: 16px 12px;
		border-radius: 12px;
	}
`

const ShotClockWrapper = styled.div`
	position: relative;
	display: inline-block;
	width: fit-content;
	margin: 0 auto;
	left: 50%;
	transform: translateX(-50%);
`;

const HornKeyHint = styled.span`
	display: block;
	font-size: 0.45em;
	font-family: 'Courier New', monospace;
	opacity: 0.6;
	margin-top: 2px;
	line-height: 1;
`;

const HornIcon = () => (
	<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
		<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
		<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
	</svg>
);

export default ShotClock;
