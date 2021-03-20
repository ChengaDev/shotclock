import 'styled-components';
import { ThemeSchema } from './types';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeSchema {}
}
