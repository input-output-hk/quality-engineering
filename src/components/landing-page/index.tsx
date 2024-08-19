import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

type HeaderProps = {
	title: string;
	tagline: string;
};

const Header = ({ title, tagline }: HeaderProps) => (
	<header className={clsx('hero hero--primary', styles.heroBanner)}>
		<div className="container">
			<Heading as="h1" className="hero__title">
				{title}
			</Heading>
			<p className={clsx('hero__subtitle', styles.heroSubtitle)}>{tagline}</p>
		</div>
	</header>
);

type FeatureProps = {
	title: string;
	description: string;
	image: React.ComponentType<React.ComponentProps<'svg'>>;
	href: string;
};

const Feature = ({ title, image: Image, description, href, className }: FeatureProps & { className?: string }) => (
	<div className={className}>
		<div className="text--center">
			<Link href={href}>
				<Image className={styles.featureSvg} role="img" />
			</Link>
		</div>

		<div className="text--center padding-horiz--md">
			<Link href={href}>
				<Heading as="h3">{title}</Heading>
			</Link>

			<p>{description}</p>
		</div>
	</div>
);

type Props = HeaderProps & {
	features: FeatureProps[];
};

export const LandingPage = ({ title, tagline, features }: Props) => {
	const className = `col col--${Math.ceil(12 / features.length)}`;

	return (
		<Layout>
			<Header title={title} tagline={tagline} />

			<main>
				<section className={styles.features}>
					<div className="container">
						<div className="row">
							{features.map((props, idx) => (
								<Feature key={idx} className={className} {...props} />
							))}
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};
