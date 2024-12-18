import React, { type ReactNode } from 'react';
import { useThemeConfig, ErrorCauseBoundary } from '@docusaurus/theme-common';
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

import styles from './styles.module.css';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';

function useNavbarItems() {
	// TODO temporary casting until ThemeConfig type is improved
	return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): JSX.Element {
	return (
		<>
			{items.map((item, i) => (
				<ErrorCauseBoundary
					key={i}
					onError={(error) =>
						new Error(
							`A theme navbar item failed to render.
              Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
              ${JSON.stringify(item, null, 2)}`,
						)
					}
				>
					<NavbarItem {...item} />
				</ErrorCauseBoundary>
			))}
		</>
	);
}

function NavbarContentLayout({ left, right }: { left: ReactNode; right: ReactNode }) {
	const { pathname } = useLocation();
	return (
		<div className={clsx('navbar__inner', pathname === '/' && 'container')}>
			<div className="navbar__items">{left}</div>
			<div className="navbar__items navbar__items--right">{right}</div>
		</div>
	);
}

export default function NavbarContent(): JSX.Element {
	const mobileSidebar = useNavbarMobileSidebar();

	const items = useNavbarItems();
	const [leftItems, rightItems] = splitNavbarItems(items);

	const searchBarItem = items.find((item) => item.type === 'search');

	return (
		<NavbarContentLayout
			left={
				// TODO stop hardcoding items?
				<>
					<NavbarLogo />
					<NavbarItems items={leftItems} />
				</>
			}
			right={
				// TODO stop hardcoding items?
				// Ask the user to add the respective navbar items => more flexible
				<>
					<NavbarItems items={rightItems} />
					<NavbarColorModeToggle className={styles.colorModeToggle} />
					{!searchBarItem && (
						<NavbarSearch>
							<SearchBar />
						</NavbarSearch>
					)}
					{!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
				</>
			}
		/>
	);
}
