import { LandingPage } from '@site/src/components/landing-page';

const title = 'Knowledge Hub';
const tagline = 'to do';
const features = [
	{
		title: 'Core Engineering Processes',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		href: '/',
	},
	{
		title: 'Engineering Onboarding',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		href: '/',
	},
	{
		title: 'Checklist & Templates',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		image: require('@site/static/img/undraw_docusaurus_react.svg').default,
		href: '/',
	},
];

export default function KnowledgeHub(): JSX.Element {
	return <LandingPage title={title} tagline={tagline} features={features} />;
}
