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

	const timeDisplayText = currentSeconds > 9 ? currentSeconds : `0${currentSeconds}`;

	return (
		<>
			<audio
				loop={false}
				ref={buzzerSoundElementRef}
				src='https://react-assets-files.s3.eu-central-1.amazonaws.com/BuzzerShort.mp3'
				style={{ display: 'none' }}
			></audio>
			<animated.div style={titleAnimationProps}>
				<Title>{locals.title}</Title>
				<SubTitle>{locals.subtitle}</SubTitle>
			</animated.div>
			<animated.div style={timeDisplayAnimationProps}>
				<TimeDisplay isClockEnded={currentSeconds === 0} markSeconds={currentSeconds < 5}>
					<FakeDigitsDisplay>88</FakeDigitsDisplay>
					{isTimeDisplay ? timeDisplayText : ''}
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

const BaseTimeDisplay = styled.div`
	font-family: 'DSEG14ClassicRegular';
	font-weight: normal;
	font-style: normal;
	font-size: 65px;
	text-align: center;
	width: 200px;
	height: 150px;
	padding: 24px;
	margin: 0 auto;
	margin-bottom: 20px;

	@media ${(props) => props.theme.mediaQueries.mobile} {
		width: 120px;
		font-size: 40px;
		margin-bottom: 20px;
		padding: 15px;
		height: 95px;
	}
`;

const TimeDisplay = styled(BaseTimeDisplay)<TimeDisplayProps>`
	border: 4px solid ${(props) => (props.isClockEnded ? props.theme.colors.red : '#8993a3')};
	color: ${(props) => (props.markSeconds ? props.theme.colors.red : props.theme.colors.white)};

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
	left: -4px;
	top: 0;
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

export default ShotClock;
