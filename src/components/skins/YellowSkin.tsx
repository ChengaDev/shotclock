import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const YellowSkin = () => {
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
	};

	return (
		<>
			<TimeDisplay>{isTimeDisplay ? currentSeconds : '--'}</TimeDisplay>
			<TimeToggleButton id='btnStart' onClick={onTickToggle} isCurrentlyTicking={isTicking}>
				{isTicking ? 'Stop' : 'Start'}
			</TimeToggleButton>
			<ClockButton id='btnReset14' onClick={on14SecondsClick}>
				14
			</ClockButton>
			<ClockButton id='btnReset24' onClick={on24SecondsClick}>
				24
			</ClockButton>
			<ClockButton id='btnToggleDisplay' onClick={toggleDisplay}>
				Display
			</ClockButton>
		</>
	);
};

const TimeDisplay = styled.div`
	font-size: 120px;
	width: 100;
	text-align: center;
	border: 2px solid black;
	margin-bottom: 20px;
	padding: 30px;
`;

const ClockButton = styled.button`
	font-size: 25px;
	height: 100px;
	width: 100px;
	padding: 10px;
	box-shadow: none;
	border: none;
	margin-right: 20px;
	outline: none;
	border-radius: 5px;
`;

type TimeToggleButtonProps = {
	isCurrentlyTicking: boolean;
};

const TimeToggleButton = styled(ClockButton)<TimeToggleButtonProps>`
	color: white;
	background-color: ${(props) => (props.isCurrentlyTicking ? 'red' : 'green')};
`;

export default YellowSkin;
