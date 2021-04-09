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
				<div>{locals.resetButtonText}</div>
				<div>14s</div>
			</ResetButton>
			<ResetButton id='btnReset24' onClick={props.on24SecondsClick}>
				<div>{locals.resetButtonText}</div>
				<div>Poss.</div>
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

		#btnToggleDisplay {
			margin-bottom: 0;
		}
	}
`;

const ClockButton = styled.button`
	font-size: 17px;
	height: 100px;
	min-width: 100px;
	padding: 10px;
	border: 4px solid #ffffff;
	background: #fdcd27;
	outline: none;
	border-radius: 20px;
	cursor: pointer;
	color: #333;
	font-weight: bold;

	@media ${'(min-width: 1200px)'} {
		width: 130px;
		height: 130px;
	}

	@media ${'(max-width: 550px)'} {
		font-size: 16px;
		margin: 0 auto;
		height: 80px;
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
	background: #fdcd27;
	font-size: 18px;
	text-align: center;
	font-weight: bold;
	color: #1d1d1b;

	@media ${'(max-width: 550px)'} {
		height: 80px;
		font-size: 16px;
	}
`;

export default Buttons;
