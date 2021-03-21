import React, { useContext } from 'react';
import styled from 'styled-components';

import { useLocalization } from '../contexts/Language/LanguageProvider';

type ControlsProps = {
	isTicking: boolean;
	onTickToggle: () => void;
	on14SecondsClick: () => void;
	on24SecondsClick: () => void;
	toggleDisplay: () => void;
};

function Buttons(props: ControlsProps) {
	const { locals } = useLocalization();

	return (
		<Container>
			<TimeToggleButton id='btnStart' onClick={props.onTickToggle} isCurrentlyTicking={props.isTicking}>
				{props.isTicking ? locals.stopLabel : locals.startLabel}
			</TimeToggleButton>
			<ResetButton id='btnReset14' onClick={props.on14SecondsClick}>
				14
			</ResetButton>
			<ResetButton id='btnReset24' onClick={props.on24SecondsClick}>
				24
			</ResetButton>
			<ClockButton id='btnToggleDisplay' onClick={props.toggleDisplay}>
				{locals.removeDisplayLabel}
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
	font-size: 17px;
	height: 100px;
	min-width: 100px;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
	cursor: pointer;
	color: #333;
	box-shadow: 1px 1px #888888;

	@media ${'(min-width: 1200px)'} {
		width: 130px;
		height: 130px;
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
