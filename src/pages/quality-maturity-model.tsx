import { LandingPage } from '@site/src/components/landing-page';

const title = 'Quality Maturity Model';
const tagline = 'The Quality Maturity Model transforms software development into a journey of continuous improvement.';
const features = [
	{
		title: 'Model Objectives',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		href: '/quality-maturity-model/objectives',
	},
	{
		title: 'How It Works',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		href: '/quality-maturity-model/how-it-works',
	},
	{
		title: 'Key Components',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_react.svg').default,
		href: '/quality-maturity-model/key-components',
	},
	{
		title: 'Resources',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		href: '/quality-maturity-model/resources',
	},
];

export default function QualityMaturityModel(): JSX.Element {
	return <LandingPage title={title} tagline={tagline} features={features} />;
}
