import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Controls from './Controls';
import Correction from './Correction';
import ShotClockReset from '../Constants';
import { useSpring, animated } from 'react-spring';

import { useLocalization } from '../contexts/Language/LanguageProvider';

const ShotClock = () => {
	const { locals } = useLocalization();
	const buzzerSoundElementRef = useRef<HTMLAudioElement>(null);

	const [currentSeconds, setCurrentSeconds] = useState<number>(ShotClockReset.BackCountPosition);
	const [currentTenths, setCurrentTenths] = useState<number>(9);
	const [isTicking, setIsTicking] = useState<boolean>(false);
	const [isTimeDisplay, setIsTimeDisplay] = useState<boolean>(true);
	const [tickInterval, setTickInterval] = useState<any>(null);
	const [timeReset, setTimeReset] = useState<boolean>(true);

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
		<>
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
						<TimeDisplay $isClockEnded={currentSeconds === 0 && !isTicking} $markSeconds={currentSeconds < 5}>
							<FakeDigitsDisplay>{showTenths ? '8.8' : '88'}</FakeDigitsDisplay>
							{isTimeDisplay ? timeDisplayText : ''}
						</TimeDisplay>
					</DisplayCell>

					{/* clear: col 3, row 1 — directly above reset poss */}
					<ClearCell>
						<Controls
							isTicking={isTicking}
							on14SecondsClick={on14SecondsClick}
							on24SecondsClick={on24SecondsClick}
							onTickToggle={onTickToggle}
							toggleDisplay={toggleDisplay}
							layout="clearOnly"
						/>
					</ClearCell>

					{/* horn: col 1, row 2 — directly above start */}
					<HornCell>
						<HornButton onClick={onHornClick}>
							<HornIcon />
						</HornButton>
					</HornCell>

					{/* correction: col 2, row 2 */}
					<CorrCell>
						<Correction decrementSecond={decrementSecond} incrementSecond={incrementSecond} />
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
						/>
					</Reset14Cell>

					{/* reset poss: col 3, row 3 — directly below clear */}
					<Reset24Cell>
						<Controls
							isTicking={isTicking}
							on14SecondsClick={on14SecondsClick}
							on24SecondsClick={on24SecondsClick}
							onTickToggle={onTickToggle}
							toggleDisplay={toggleDisplay}
							layout="reset24Only"
						/>
					</Reset24Cell>
				</LayoutGrid>
			</animated.div>
		</>
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
	color: ${(props) => (props.$markSeconds ? props.theme.colors.red : props.theme.colors.white)};

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
`;
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

const HornIcon = () => (
	<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
		<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
		<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
	</svg>
);

export default ShotClock;
