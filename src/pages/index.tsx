import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LandingPage } from '@site/src/components/landing-page';

const features = [
	{
		title: 'Quality Maturity Model',
		description:
			'Our peer-review, evidence-based tool to support projects deliver high-quality products effectively and efficiently.',
		image: '/img/qmm-icon.png',
		href: '/docs/quality-maturity-model/overview',
	},
	{
		title: 'Quality Strategy',
		description:
			'A comprehensive tool that guides our projects through the process of envisioning and achieving success.',
		image: '/img/qs-icon.png',
		href: '/docs/quality-strategy/getting-started',
	},
	{
		title: 'Knowledge Hub',
		description:
			'Central hub for collaborative knowledge sharing and evolving quality engineering strategies, practices, and processes.',
		image: '/img/kb-icon.png',
		href: '/docs/knowledge-hub/getting-started',
	},
];

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		// TODO: This doesn't need to be abstracted anymore as it's not used elsewhere
		<LandingPage
			title={
				<>
					Welcome to <span>IO's</span> Quality Engineering Space!
				</>
			}
			features={features}
		/>
	);
}
