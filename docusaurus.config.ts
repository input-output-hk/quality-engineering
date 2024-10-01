import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

const config: Config = {
	title: 'Quality Engineering',
	tagline: 'Your go-to source for software engineering practices and collaborative growth.',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://iohk.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: process.env.BASE_URL || '/',
	trailingSlash: true,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'input-output-hk', // Usually your GitHub org/user name.
	projectName: 'quality-engineering', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					// routeBasePath: '/',
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/input-output-hk/Quality-Engineering/tree/main/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/input-output-hk/Quality-Engineering/tree/main/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// TODO: Replace with your project's social card
		// image: 'img/docusaurus-social-card.jpg',
		colorMode: {
			disableSwitch: true,
		},
		navbar: {
			title: 'Quality Engineering',
			logo: {
				alt: 'IO Quality Engineering',
				src: 'img/logo.svg',
				height: 28,
				width: 45,
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'docsSidebar',
					position: 'right',
					label: 'Docs',
				},
				{ to: '/blog', label: 'Blog', position: 'right' },
				{
					href: 'https://github.com/input-output-hk/quality-engineering',
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
				},
			],
		},
		docs: {
			sidebar: {
				hideable: true,
			},
		},
		footer: {
			logo: {
				alt: 'IOG',
				src: 'img/logo-small.svg',
			},
			copyright: `Copyright © ${new Date().getFullYear()} IOG, Inc.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,

	headTags: [
		{
			tagName: 'link',
			attributes: {
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com',
			},
		},
		{
			tagName: 'link',
			attributes: {
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
				crossOrigin: 'true',
			},
		},
		{
			tagName: 'link',
			attributes: {
				href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&display=swap',
				rel: 'stylesheet',
			},
		},
	],

	plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],
};

export default config;
