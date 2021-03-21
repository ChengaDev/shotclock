import React from 'react';
import styled from 'styled-components';

type CorrectionProps = {
	decrementSecond: () => void;
	incrementSecond: () => void;
};

const Correction = (props: CorrectionProps) => {
	return (
		<Container>
			<AdjustIcon onClick={props.decrementSecond} className='fa fa-minus' aria-hidden='true' />
			<CorrectionSign>C</CorrectionSign>
			<AdjustIcon onClick={props.incrementSecond} className='fa fa-plus' aria-hidden='true' />
		</Container>
	);
};

const AdjustIcon = styled.i`
	cursor: pointer;
	font-size: 30px;
	color: ${(props) => props.theme.mainTextColor};

	@media ${'(max-width: 550px)'} {
		font-size: 14px;
	}
`;

const CorrectionSign = styled.span`
	font-size: 30px;
	line-height: 50px;
	margin-right: 20px;
	user-select: none;
	margin-left: 20px;
	height: 50px;
	width: 50px;
	background-color: #3486eb;
	color: white;
	font-weight: bold;
	border-radius: 50%;
	display: inline-block;
	margin-bottom: 50px;

	@media ${'(max-width: 550px)'} {
		margin-bottom: 20px;
		font-size: 15px;
		height: 30px;
		width: 30px;
		line-height: 30px;
	}
`;

const Container = styled.div`
	text-align: center;
`;

export default Correction;
