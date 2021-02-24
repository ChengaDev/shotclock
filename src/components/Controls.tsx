import React from 'react';
import styled from 'styled-components';

type ControlsProps = {
	isTicking: boolean;
	onTickToggle: () => void;
	on14SecondsClick: () => void;
	on24SecondsClick: () => void;
	toggleDisplay: () => void;
};

function Buttons(props: ControlsProps) {
	return (
		<Container>
			<TimeToggleButton id='btnStart' onClick={props.onTickToggle} isCurrentlyTicking={props.isTicking}>
				{props.isTicking ? 'Stop' : 'Start'}
			</TimeToggleButton>
			<ResetButton id='btnReset14' onClick={props.on14SecondsClick}>
				14
			</ResetButton>
			<ResetButton id='btnReset24' onClick={props.on24SecondsClick}>
				24
			</ResetButton>
			<ClockButton id='btnToggleDisplay' onClick={props.toggleDisplay}>
				Display
			</ClockButton>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media ${'(max-width: 550px)'} {
		flex-direction: column;
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
		width: 85px;
		height: 85px;
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

export default Buttons;
