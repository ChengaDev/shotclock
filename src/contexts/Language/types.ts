import { LocalizationType } from '../../localization/types';

export type LocalizationContextType = {
	languageCode: string;
	changeLocale: (newLanuageCode: string) => void;
	locals: LocalizationType;
};
