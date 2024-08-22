import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LandingPage } from '@site/src/components/landing-page';

const features = [
	{
		title: 'Quality Maturity Model',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		href: '/quality-maturity-model',
	},
	{
		title: 'Quality Strategy',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		href: '/quality-strategy',
	},
	{
		title: 'Knowledge Hub',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_react.svg').default,
		href: '/knowledge-hub',
	},
];

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		<LandingPage
			title="Welcome to IO's Quality Engineering Space!"
			tagline={siteConfig.tagline}
			features={features}
		/>
	);
}
