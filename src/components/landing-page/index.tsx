import styles from './styles.module.css';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

type HeaderProps = {
	title: React.ReactElement;
};

const Header = ({ title }: HeaderProps) => (
	<header className={styles.heroBanner}>
		<div className={styles.heroContent}>
			<Heading as="h1" className={styles.heroTitle}>
				{title}
			</Heading>

			<img
				className={styles.heroImage}
				src="/img/shapes-illustration.svg"
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

type Props = HeaderProps & {
	features: FeatureProps[];
};

export const LandingPage = ({ title, features }: Props) => {
	return (
		<Layout>
			<Header title={title} />

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
					<img src="/img/shapes-illustration.svg" alt="Illustration" aria-hidden />
				</div>
			</main>
		</Layout>
	);
};
