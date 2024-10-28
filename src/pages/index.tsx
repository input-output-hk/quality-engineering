import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const features = [
	{
		title: 'Quality Maturity Model',
		description:
			'Our peer-review and evidence-based tool to support projects deliver high-quality products effectively and efficiently.',
		image: './img/qmm-icon.png',
		href: '/docs/quality-maturity-model/overview',
	},
	{
		title: 'Quality Strategy',
		description:
			'A comprehensive tool that guides our projects through the process of envisioning and achieving success.',
		image: './img/qs-icon.png',
		href: 'docs/quality-strategy/understanding-quality-strategy',
	},
	{
		title: 'Knowledge Hub',
		description:
			'Central hub for collaborative knowledge sharing and evolving quality engineering strategies, practices, and processes.',
		image: './img/kb-icon.png',
		href: '/docs/knowledge-hub',
	},
];

export default function Home(): JSX.Element {
	return (
		<Layout>
			<Header />

			<main>
				<section className={styles.featuresSection}>
					<div className="container">
						<div className={styles.features}>
							{features.map((props, idx) => (
								<Feature key={idx} {...props} />
							))}
						</div>
					</div>
				</section>

				<div className={clsx('container', styles.illustration)}>
					<img src="./img/shapes-illustration.svg" alt="Illustration" aria-hidden />
				</div>
			</main>
		</Layout>
	);
}

const Header = () => (
	<header className={styles.heroBanner}>
		<div className={styles.heroContent}>
			<Heading as="h1" className={styles.heroTitle}>
				Welcome to <span>IO's</span> Quality Engineering Space!
			</Heading>

			<img
				className={styles.heroImage}
				src="./img/shapes-illustration.svg"
				alt="Banner illustration"
				aria-hidden
			/>
		</div>
	</header>
);

type FeatureProps = {
	title: string;
	description: string;
	image: string;
	href: string;
};

const Feature = ({ title, image, description, href }: FeatureProps) => (
	<div className={styles.feature}>
		<Link href={href} className={styles.featureHeading}>
			<Heading as="h3">{title}</Heading>
		</Link>

		<div className={styles.featureContent}>
			<img src={image} className={styles.featureImage} role="img" />

			<p className={styles.featureDescription}>{description}</p>
		</div>

		<div className={styles.featureCta}>
			<Link href={href}>Learn more</Link>
		</div>
	</div>
);
