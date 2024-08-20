import { LandingPage } from '@site/src/components/landing-page';

const title = 'Quality Strategy';
const tagline = 'The Quality Strategy is about envisioning success and paving the way to achieve it.';
const features = [
	{
		title: 'Objectives',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		href: '/quality-strategy/overview',
	},
	{
		title: 'Benefits',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		href: '/quality-strategy/overview',
	},
	{
		title: 'How It Works',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_react.svg').default,
		href: '/quality-strategy/how-it-works',
	},
	{
		title: 'Resources',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		href: '/quality-strategy/resources',
	},
];

export default function QualityMaturityModel(): JSX.Element {
	return <LandingPage title={title} tagline={tagline} features={features} />;
}
