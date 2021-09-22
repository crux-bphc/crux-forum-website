import React from 'react';
import Switch from '../../ui/Switch';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { ThemeContext } from './ThemeContextProvider';

interface ThemeTogglerProps {}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({}) => {
	const { theme } = React.useContext(ThemeContext);
	const [active, setActive] = React.useState<boolean>(false);

	React.useEffect(() => {
		setActive(theme === 'dark');
	}, [theme]);

	return (
		<Switch
			left={
				theme === 'light' ? (
					<MoonIcon className="h-4 w-4" />
				) : (
					<SunIcon className="h-4 w-4" />
				)
			}
			id="theme"
			data-testid="toggler"
			active={active}
			onChange={() => setActive(!active)}
			variantChecked="purple"
		/>
	);
};

export default ThemeToggler;
