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
	const [isTicking, setIsTicking] = useState<boolean>(false);
	const [isTimeDisplay, setIsTimeDisplay] = useState<boolean>(true);
	const [tickInterval, setTickInterval] = useState<any>(null);
	const [timeReset, setTimeReset] = useState<boolean>(true);

	const secondsRef = useRef<number>();
	const isTickingRef = useRef<boolean>();
	const intervalRef = useRef<any>();

	secondsRef.current = currentSeconds;
	isTickingRef.current = isTicking;
	intervalRef.current = tickInterval;

	const incrementSecond = useCallback(() => {
		if (currentSeconds < ShotClockReset.BackCountPosition && !isTickingRef.current) {
			setCurrentSeconds(currentSeconds + 1);
		}
	}, [isTickingRef.current, currentSeconds]);

	const decrementSecond = useCallback(() => {
		if (currentSeconds > 0 && !isTickingRef.current) {
			setCurrentSeconds(currentSeconds - 1);
		}
	}, [isTickingRef.current, currentSeconds]);

	const on14SecondsClick = useCallback(() => {
		setTimeReset(true);
		if (!isTickingRef.current && intervalRef.current) {
			clearInterval(intervalRef.current);
			setTickInterval(null);
		}

		setIsTimeDisplay(true);
		setCurrentSeconds(ShotClockReset.FrontCountPosition);
	}, [isTickingRef.current, intervalRef.current]);

	const on24SecondsClick = useCallback(() => {
		setTimeReset(true);
		if (!isTickingRef.current && intervalRef.current) {
			clearInterval(intervalRef.current);
			setTickInterval(null);
		}

		setIsTimeDisplay(true);
		setCurrentSeconds(ShotClockReset.BackCountPosition);
	}, [isTickingRef.current, intervalRef.current]);

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
				const interval = setInterval(tickIntervalHandler, 1000);
				setTickInterval(interval);
			}
			setIsTimeDisplay(true);
		}
		setIsTicking(!isTickingRef.current);
	};

	const toggleDisplay = () => {
		setIsTimeDisplay(!isTimeDisplay);
	};

	const tickIntervalHandler = () => {
		const currentSecondsValue = secondsRef.current || 0;
		if (isTickingRef.current && currentSecondsValue > 0) {
			setCurrentSeconds(currentSecondsValue - 1);
		}
		if (currentSecondsValue === 0) {
			if (isTickingRef.current) {
				buzzerSoundElementRef.current?.play();
			}
			setIsTicking(false);
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

	return (
		<>
			<audio
				loop={false}
				ref={buzzerSoundElementRef}
				src={process.env.PUBLIC_URL + '/BuzzerShort.mp3'}
				style={{ display: 'none' }}
			></audio>
			<animated.div style={titleAnimationProps}>
				<Title>{locals.title}</Title>
				<SubTitle>{locals.subtitle}</SubTitle>
			</animated.div>
			<animated.div style={timeDisplayAnimationProps}>
				<TimeDisplay isClockEnded={currentSeconds === 0} markSeconds={currentSeconds < 5}>
					{isTimeDisplay ? currentSeconds : '--'}
				</TimeDisplay>

				<Correction decrementSecond={decrementSecond} incrementSecond={incrementSecond} />
				<Controls
					isTicking={isTicking}
					on14SecondsClick={on14SecondsClick}
					on24SecondsClick={on24SecondsClick}
					onTickToggle={onTickToggle}
					toggleDisplay={toggleDisplay}
				/>
			</animated.div>
		</>
	);
};

type TimeDisplayProps = {
	markSeconds: boolean;
	isClockEnded: boolean;
};

const TimeDisplay = styled.div<TimeDisplayProps>`
	font-size: 100px;
	text-align: center;
	border: 4px solid ${(props) => (props.isClockEnded ? '#C85036' : '#8993a3')};
	color: ${(props) => (props.markSeconds ? 'red' : 'white')};
	font-weight: ${(props) => (props.markSeconds ? 'bold' : '400')};
	padding: 24px;
	background-color: #373b4a;
	width: 200px;
	margin: 0 auto;
	margin-bottom: 20px;

	@media ${'(min-width: 1000px)'} {
		margin-bottom: 30px;
		margin-top: 30px;
	}

	@media ${'(max-width: 550px)'} {
		width: 100px;
		font-size: 40px;
		margin-bottom: 20px;
		padding: 15px;
	}
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

	@media ${'(max-width: 550px)'} {
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

export default ShotClock;
