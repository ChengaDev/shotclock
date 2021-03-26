import { useContext } from 'react';
import styled from 'styled-components';

import { useLocalization } from '../contexts/Language/LanguageProvider';
import LanguageCodes from '../constants/LanguageCodes';

const LanguageSelector = () => {
	const { languageCode, changeLocale } = useLocalization();

	return (
		<Container>
			{Object.values(LanguageCodes).map((language) => {
				return (
					<LanguageDisplay
						key={language}
						onClick={() => changeLocale(language)}
						isSelected={languageCode === language}
					>
						{language.toUpperCase()}
					</LanguageDisplay>
				);
			})}
		</Container>
	);
};

const Container = styled.div`
	font-size: 14px;
	display: flex;
	text-align: center;
	width: 100%;
	justify-content: center;
	margin-bottom: 20px;
`;

type LanguageDisplayProps = {
	isSelected: boolean;
};

const LanguageDisplay = styled.div<LanguageDisplayProps>`
	cursor: pointer;
	margin-right: 10px;
	color: ${(props) => props.theme.mainTextColor};

	:last-child {
		margin-right: 0;
	}

	:hover {
		font-weight: bold;
	}

	${(props) =>
		props.isSelected &&
		`
        font-weight: bold;
    `}
`;

export default LanguageSelector;
