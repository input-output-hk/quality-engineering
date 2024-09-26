import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const DimensionGrid = ({ children }: PropsWithChildren<{}>) => <div className={styles.grid}>{children}</div>;

export const DimensionGridColumn = ({ title, children }: PropsWithChildren<{ title: string }>) => (
	<div className={styles.column}>
		<div className={styles.columnHeader}>
			<h2 className={styles.columnTitle}>{title}</h2>
		</div>
		<div className={styles.columnContent}>{children}</div>
	</div>
);
