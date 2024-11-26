import React, { memo, useEffect, useState, type ReactNode } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { groupBlogSidebarItemsByYear } from '@docusaurus/plugin-content-blog/client';
import Heading from '@theme/Heading';
import type { Props } from '@theme/BlogSidebar/Content';

import tagsData from '@site/blog/tags-sidebar-data.json';
import BlogTagsSidebar from '@site/src/components/BlogTagsSidebar';

function BlogSidebarYearGroup({
	year,
	yearGroupHeadingClassName,
	children,
}: {
	year: string;
	yearGroupHeadingClassName?: string;
	children: ReactNode;
}) {
	return (
		<div role="group">
			<Heading as="h3" className={yearGroupHeadingClassName}>
				{year}
			</Heading>
			{children}
		</div>
	);
}

function BlogSidebarContent({ items, yearGroupHeadingClassName, ListComponent }: Props): ReactNode {
	const themeConfig = useThemeConfig();

	const [tagsArray, setTagsArray] = useState<any[]>([]);

	useEffect(() => {
		const tagsArray = Object.entries(tagsData).map(([key, value]) => ({
			label: value.label,
			permalink: value.permalink,
			description: value.description,
		}));
		setTagsArray(tagsArray);
	}, []);

	if (themeConfig.blog.sidebar.groupByYear) {
		const itemsByYear = groupBlogSidebarItemsByYear(items);
		return (
			<>
				{itemsByYear.map(([year, yearItems]) => (
					<BlogSidebarYearGroup key={year} year={year} yearGroupHeadingClassName={yearGroupHeadingClassName}>
						<ListComponent items={yearItems} />
					</BlogSidebarYearGroup>
				))}
				<BlogTagsSidebar tags={tagsArray} />
			</>
		);
	} else {
		return <ListComponent items={items} />;
	}
}

export default memo(BlogSidebarContent);
