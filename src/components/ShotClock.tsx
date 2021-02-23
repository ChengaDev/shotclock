import React, { useState, useRef } from 'react';
import styled from 'styled-components';

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
			<Title>Shot clock practise</Title>
			<TimeDisplay markSeconds={currentSeconds < 5}>{isTimeDisplay ? currentSeconds : '--'}</TimeDisplay>
			<Buttons>
				<TimeToggleButton id='btnStart' onClick={onTickToggle} isCurrentlyTicking={isTicking}>
					{isTicking ? 'Stop' : 'Start'}
				</TimeToggleButton>
				<ResetButton id='btnReset14' onClick={on14SecondsClick}>
					14
				</ResetButton>
				<ResetButton id='btnReset24' onClick={on24SecondsClick}>
					24
				</ResetButton>
				<ClockButton id='btnToggleDisplay' onClick={toggleDisplay}>
					Display
				</ClockButton>
			</Buttons>
		</>
	);
};

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media ${'(max-width: 550px)'} {
		flex-direction: column;
	}
`;

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
	margin-bottom: 50px;

	@media ${'(min-width: 1000px)'} {
		margin-bottom: 100px;
		margin-top: 60px;
	}

	@media ${'(max-width: 550px)'} {
		width: 100px;
		font-size: 40px;
		margin-bottom: 20px;
		padding: 15px;
	}
`;

const ClockButton = styled.button`
	font-size: 22px;
	height: 100px;
	min-width: 100px;
	padding: 10px;
	box-shadow: none;
	border: none;
	outline: none;
	border-radius: 5px;
	cursor: pointer;
	color: #333;

	@media ${'(min-width: 1000px)'} {
		width: 150px;
		height: 150px;
	}

	@media ${'(max-width: 550px)'} {
		margin: 0 auto;
		width: 100px;
		height: 100px;
		margin-bottom: 20px;
	}
`;

type TimeToggleButtonProps = {
	isCurrentlyTicking: boolean;
};

const TimeToggleButton = styled(ClockButton)<TimeToggleButtonProps>`
	color: white;
	background-color: ${(props) => (props.isCurrentlyTicking ? 'red' : 'green')};
`;

const ResetButton = styled(ClockButton)`
	font-size: 50px;
	font-weight: bold;
	background-color: #e8ddbe;
	color: #456fa3;
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
