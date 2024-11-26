import Link from '@docusaurus/Link';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

type Tag = {
	label: string;
	permalink: string;
	description?: string;
};

type BlogTagsSidebarProps = {
	tags: Tag[];
};

const BlogTagsSidebar: React.FC<BlogTagsSidebarProps> = ({ tags }) => {
	const { pathname } = useLocation();

	return (
		<div className="tags-dropdown-container">
			<div className="tags-filter-heading">Filter by Tags</div>
			<ul id="tags-dropdown" className="tags-dropdown">
				<li key={'all'}>
					<Link href={`/blog`} aria-selected={pathname === '/blog/'}>
						All Posts
					</Link>
				</li>
				{tags.map((tag) => (
					<li key={tag.permalink}>
						<Link
							href={`/blog/tags${tag.permalink}`}
							aria-selected={pathname === `/blog/tags${tag.permalink}/`}
						>
							{tag.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BlogTagsSidebar;
