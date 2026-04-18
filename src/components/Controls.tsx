import React from 'react';
import styled from 'styled-components';

import { useLocalization } from '../contexts/Language/LanguageProvider';

type ControlsProps = {
	isTicking: boolean;
	onTickToggle: () => void;
	on14SecondsClick: () => void;
	on24SecondsClick: () => void;
	toggleDisplay: () => void;
	layout?: 'all' | 'clearOnly' | 'actionsOnly' | 'startOnly' | 'reset14Only' | 'reset24Only';
};

function Buttons(props: ControlsProps) {
	const { locals } = useLocalization();
	const layout = props.layout ?? 'all';

	const showStart   = layout === 'all' || layout === 'actionsOnly' || layout === 'startOnly';
	const showReset14 = layout === 'all' || layout === 'actionsOnly' || layout === 'reset14Only';
	const showReset24 = layout === 'all' || layout === 'actionsOnly' || layout === 'reset24Only';
	const showClear   = layout === 'all' || layout === 'clearOnly';

	return (
		<Container $layout={layout}>
			{showStart && (
				<TimeToggleButton id='btnStart' onClick={props.onTickToggle} $isCurrentlyTicking={props.isTicking}>
					{props.isTicking ? locals.stopLabel : locals.startLabel}
				</TimeToggleButton>
			)}
			{showReset14 && (
				<ResetButton id='btnReset14' onClick={props.on14SecondsClick}>
					<div>{locals.resetButtonText}</div>
					<div>14s</div>
				</ResetButton>
			)}
			{showClear && (
				<ClockButton id='btnToggleDisplay' onClick={props.toggleDisplay}>
					{locals.removeDisplayLabel}
				</ClockButton>
			)}
			{showReset24 && (
				<ResetButton id='btnReset24' onClick={props.on24SecondsClick}>
					<div>{locals.resetButtonText}</div>
					<div>{locals.possessionLabel}</div>
				</ResetButton>
			)}
		</Container>
	);
}

const Container = styled.div<{ $layout: string }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 100px;
	margin-bottom: ${(props) => props.$layout === 'all' ? '50px' : '0'};

	@media ${(props) => props.theme.mediaQueries.mobile} {
		flex-direction: column;
		margin-bottom: ${(props) => props.$layout === 'all' ? '20px' : '0'};
	}
`;

const ClockButton = styled.button`
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
	transition: transform 0.08s ease, box-shadow 0.08s ease;

	&:active {
		transform: scale(0.92) translateY(2px);
		box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.35);
	}

	@media ${'(min-width: 768px)'} {
		font-size: 16px;
		height: 100px;
		width: 100px;
	}

	@media ${'(min-width: 1200px)'} {
		font-size: 18px;
		height: 130px;
		width: 130px;
	}

	@media ${(props) => props.theme.mediaQueries.mobile} {
		font-size: 13px;
		margin: 0 auto;
		height: 70px;
		width: 70px;
	}
`;

type TimeToggleButtonProps = {
	$isCurrentlyTicking: boolean;
};

const TimeToggleButton = styled(ClockButton)<TimeToggleButtonProps>`
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => (props.$isCurrentlyTicking ? props.theme.colors.red : 'green')};
`;

const ResetButton = styled(ClockButton)`
	background: ${(props) => props.theme.defaulButtonBackground};
	font-size: 18px;
	text-align: center;
	font-weight: bold;

	@media ${(props) => props.theme.mediaQueries.mobile} {
		height: 70px;
		width: 70px;
		font-size: 13px;
	}
`;

export default Buttons;
