import LanguageSelector from './components/LanguageSelector';
import ShotClock from './components/ShotClock';
import Footer from './components/Footer';

import LanguageProvider from './contexts/Language/LanguageProvider';

function App() {
	return (
		<div className='App'>
			<LanguageProvider>
				<LanguageSelector />
				<ShotClock />
				<Footer />
			</LanguageProvider>
		</div>
	);
}

export default App;
