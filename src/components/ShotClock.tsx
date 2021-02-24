import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Controls from './Controls';
import Correction from './Correction';

const ShotClock = () => {
	const [currentSeconds, setCurrentSeconds] = useState<number>(24);
	const [isTicking, setIsTicking] = useState<boolean>(false);
	const [isTimeDisplay, setIsTimeDisplay] = useState<boolean>(true);
	const [tickInterval, setTickInterval] = useState<any>(null);

	const secondsRef = useRef<number>();
	const isTickingRef = useRef<boolean>();
	const intervalRef = useRef<any>();

	secondsRef.current = currentSeconds;
	isTickingRef.current = isTicking;
	intervalRef.current = tickInterval;

	const incrementSecond = () => {
		if (currentSeconds < 24 && !isTicking) {
			setCurrentSeconds(currentSeconds + 1);
		}
	};

	const decrementSecond = () => {
		if (currentSeconds > 0 && !isTicking) {
			setCurrentSeconds(currentSeconds - 1);
		}
	};

	const on14SecondsClick = () => {
		if (!isTickingRef.current && intervalRef.current) {
			clearInterval(intervalRef.current);
			setTickInterval(null);
		}

		setIsTimeDisplay(true);
		setCurrentSeconds(14);
	};

	const on24SecondsClick = () => {
		if (!isTickingRef.current && intervalRef.current) {
			clearInterval(intervalRef.current);
			setTickInterval(null);
		}

		setIsTimeDisplay(true);
		setCurrentSeconds(24);
	};

	const onTickToggle = () => {
		if (!isTickingRef.current) {
			if (!intervalRef.current) {
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
			setIsTicking(false);
		}
	};

	return (
		<>
			<Title>Shot clock practice</Title>
			<TimeDisplay markSeconds={currentSeconds < 5}>{isTimeDisplay ? currentSeconds : '--'}</TimeDisplay>
			<Correction decrementSecond={decrementSecond} incrementSecond={incrementSecond} />
			<Controls
				isTicking={isTicking}
				on14SecondsClick={on14SecondsClick}
				on24SecondsClick={on24SecondsClick}
				onTickToggle={onTickToggle}
				toggleDisplay={toggleDisplay}
			/>
		</>
	);
};

type TimeDisplayProps = {
	markSeconds: boolean;
};

const TimeDisplay = styled.div<TimeDisplayProps>`
	font-size: 100px;
	text-align: center;
	border: 2px solid #8993a3;
	color: ${(props) => (props.markSeconds ? 'red' : 'white')};
	font-weight: ${(props) => (props.markSeconds ? 'bold' : '400')};
	padding: 30px;
	background-color: #373b4a;
	width: 200px;
	margin: 0 auto;
	margin-bottom: 20px;

	@media ${'(min-width: 1000px)'} {
		margin-bottom: 30px;
		margin-top: 60px;
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
	color: #333;
	margin-top: 0;
	margin-bottom: 50px;
	text-align: center;

	@media ${'(min-width: 770px)'} {
		font-size: 50px;
	}

	@media ${'(max-width: 550px)'} {
		font-size: 20px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
`;

export default ShotClock;
