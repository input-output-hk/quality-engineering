import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docsSidebar: [
		{
			'Quality Maturity Model': [
				'quality-maturity-model/overview',
				'quality-maturity-model/objectives',
				'quality-maturity-model/how-it-works',
				{
					type: 'category',
					label: 'Key components',
					link: {
						type: 'doc',
						id: 'quality-maturity-model/key-components/index',
					},
					items: [
						'quality-maturity-model/key-components/practices-processes/index',
						'quality-maturity-model/key-components/collaboration-communication/index',
						'quality-maturity-model/key-components/product-specification/index',
						'quality-maturity-model/key-components/requirements-management/index',
						'quality-maturity-model/key-components/design-and-architecture/index',
						'quality-maturity-model/key-components/development-effectiveness/index',
						'quality-maturity-model/key-components/quality-control-effectiveness/index',
						'quality-maturity-model/key-components/test-results-reporting/index',
						'quality-maturity-model/key-components/security-validation/index',
						'quality-maturity-model/key-components/performance-validation/index',
						'quality-maturity-model/key-components/ci-cd/index',
						'quality-maturity-model/key-components/release-management/index',
						'quality-maturity-model/key-components/continuous-improvement/index',
						'quality-maturity-model/key-components/vendor-integration/index',
					],
				},
				'quality-maturity-model/resources',
			],
		},
		{
			'Quality Strategy': [
				'quality-strategy/getting-started',
				'quality-strategy/overview',
				'quality-strategy/background',
				'quality-strategy/how-it-works',
				{
					Resources: [
						'quality-strategy/resources/faqs',
						'quality-strategy/resources/quality-strategy-template',
						'quality-strategy/resources/system-level-test-strategy-template',
						'quality-strategy/resources/tips-and-tricks-for-creating-quality-strategies',
					],
				},
			],
		},
		{
			'Knowledge Hub': [
				'knowledge-hub/getting-started',
				'knowledge-hub/core-engineering-processes',
				'knowledge-hub/checklist-templates',
				'knowledge-hub/guidelines-and-proven-practices',
				'knowledge-hub/educational',
				'knowledge-hub/engineering-onboarding',
			],
		},
	],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
