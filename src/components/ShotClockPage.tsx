import LanguageSelector from '../components/LanguageSelector';
import ShotClock from '../components/ShotClock';
import ThemeSelector from '../components/ThemeSelector';

type ShotClockPageProps = {
	selectedTheme: string;
	setSelectedTheme: any;
};

const ShotClockPage = (props: ShotClockPageProps) => {
	return (
		<>
			<LanguageSelector />
			<ThemeSelector theme={props.selectedTheme} setTheme={props.setSelectedTheme} />
			<ShotClock />
		</>
	);
};

export default ShotClockPage;
