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
	color: #000000;
	font-size: 22px;

	@media ${'(max-width: 550px)'} {
		font-size: 20px;
	}
`;

const CorrectionSign = styled.span`
	font-size: 22px;
	margin-right: 20px;
	user-select: none;
	margin-left: 20px;
	height: 40px;
	width: 60px;
	font-weight: bold;
	border-radius: 40px;
	border: 4px solid #fff;
	display: inline-block;
	margin-top: -4px;
	line-height: 35px;

	@media ${'(max-width: 550px)'} {
		font-size: 20px;
		font-weight: bold;
		height: 40px;
		width: 60px;
	}
`;

const Container = styled.div`
	text-align: center;
	border: 4px solid #fff;
	border-radius: 40px;
	width: 220px;
	height: 40px;
	background-color: #fdcd27;
	margin: 0 auto;
	margin-bottom: 50px;

	@media ${'(max-width: 550px)'} {
		margin-bottom: 30px;
		margin-top: 30px;
		width: 200px;
	}
`;

export default Correction;
