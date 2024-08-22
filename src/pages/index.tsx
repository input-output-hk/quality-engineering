import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LandingPage } from '@site/src/components/landing-page';

const features = [
	{
		title: 'Quality Maturity Model',
		description:
			'Our peer-review, evidence-based tool to support projects deliver high-quality products effectively and efficiently.',
		image: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		href: '/docs/quality-maturity-model/overview',
	},
	{
		title: 'Quality Strategy',
		description:
			'A comprehensive tool that guides our projects through the process of envisioning and achieving success.',
		image: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		href: '/docs/quality-strategy/getting-started',
	},
	{
		title: 'Knowledge Hub',
		description:
			'Central hub for collaborative knowledge sharing and evolving quality engineering strategies, practices, and processes.',
		image: require('@site/static/img/undraw_docusaurus_react.svg').default,
		href: '/docs/knowledge-hub/getting-started',
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
