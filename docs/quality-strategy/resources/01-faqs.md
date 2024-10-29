# FAQs

## What is a Quality Strategy and what is it for?

The following conversation is:

-   highly dispiriting
-   all too common
-   easily prevented

![Example conversation](/img/quality-strategy/conversation.png)

**How do you prevent it?**

You write down - before you start - what “finishing Thing A” actually is, and you don’t start building Thing A until there’s agreement on that from the relevant parties.

**So what is a ‘Quality Strategy/DoD’?**

It’s the minimum you need to write down up front to achieve the goal of never having this Terrible Conversation again.

**So a ‘Quality Strategy/DoD’ is only a term for a skeleton type of document, then?**

Let’s not be too dogmatic about it. If you start adding detailed Acceptance Criteria to your doc, it’s still a ‘Quality Strategy/DoD’, as long as it can prevent this Terrible Conversation.

## Why do we need a quality strategy?

:::info

Writing enables better structuring of thoughts. Writing doesn’t just clarify your existing ideas; it generates more of them.

:::

A quality strategy enhances transparency, clarity, and confidence regarding the project's strategy, approaches, current status, and potential risks. It also provides a comprehensive view of the product or feature vision, a clear definition of success, and the metrics used to evaluate success.

A quality strategy is essential for several reasons:

-   **Visioning and achieving success**: a quality strategy is crucial for defining a clear vision of success and detailing the steps to achieve it.
-   **Ensures consistent quality**: it sets a standard for quality across all processes and products, ensuring consistency and reliability in the outputs. This consistency is crucial for maintaining customer and stakeholder trust and satisfaction.
-   **Guided decision making**: it provides a clear framework for decision-making, helping projects and squads to prioritize quality in their work and align their actions with the overall goals of the organization.
-   **Improves efficiency**: by establishing clear quality guidelines and processes, a quality strategy can streamline operations, reduce errors, and lower costs associated with rework and quality control issues.
-   **Enhances brand reputation**: high-quality products and services strengthen the brand's reputation in the market, attracting and retaining customers and setting the organization apart from competitors.
-   **Drives continuous improvement**: a quality strategy includes mechanisms for feedback and continual improvement, encouraging innovation and adaptation to changing market needs and technologies.
-   **Risk management**: it helps in identifying, assessing, and mitigating risks associated with product or service quality, thus preventing potential failures, customer dissatisfaction, or reputational damage.
-   **Employee engagement and morale**: a clear focus on quality can enhance employee engagement, as staff understand their role in delivering high-quality products and services, and take pride in their work.
-   **Cost efficiency**: addressing quality at the outset is often more cost-effective than correcting issues later. A well-defined quality strategy helps in reducing the likelihood of expensive rework, or repairs.
-   **Alignment with business objectives**: a quality strategy aligns quality goals with broader business objectives, ensuring that quality efforts support the overall direction and goals of the organization.

In summary, a quality strategy is fundamental for achieving and maintaining high standards of product or service quality, which in turn drives customer satisfaction, business efficiency, compliance, competitive advantage, and overall organizational success.

## Why document quality assurance (QA) processes?

Documenting QA processes:

-   helps define the scope, objectives, criteria, and methods of QA activities, such as planning, designing, executing, reviewing, and reporting tests at all levels.
-   provides a reference and a guide for your team members, stakeholders, and auditors to understand and follow the QA standards and expectations.
-   enables you to track and measure the progress, performance, and quality of your project, and identify and resolve any issues or risks.
-   facilitates collaboration, coordination, and communication among your team members and other parties involved in the project.
-   can support decision-making and problem-solving based on facts and data.

## Why shouldn't software testing engineers be solely responsible for creating the (quality) strategies?

When addressing this question, it's crucial to understand that while quality is everyone's responsibility, it can paradoxically become no one's responsibility if not properly managed. This is where the concept of **accountability** becomes vital.

**Quality assurance** in software development isn't a task that can be isolated to one phase or handled solely by one group of professionals. Instead, it requires a comprehensive approach throughout the entire SDLC, from product requirements to delivery and monitoring.

Each development phase (product design, architecture, implementation, final validation, delivery, and monitoring) requires dedicated attention to quality. **Ensuring that representatives or project leaders from each role are involved in the (quality) strategy reinforces accountability at every stage**.

This collective participation ensures that each role or individual understands and takes responsibility for their contribution to the overall quality of the product.

In essence, involving various key roles in the creation and maintenance of the quality strategy isn't just about diversifying perspectives. It's about _embedding quality into every layer of the development process_. Each participant brings unique insights and expertise, which helps in identifying potential issues early and ensuring that quality is not just an end goal but a continuous, integral part of the development cycle. By doing so, we not only aim for a high-quality product at the end of the cycle but also to build and validate quality consistently and continuously throughout the process.

## Who’s responsible for creating and reviewing the quality strategy?

**As leaders, it's our duty to craft clear strategies for the successful delivery of software functionalities**. Once the vision and roadmap are in place, the next step is ensuring the teams are aligned and moving in the same direction. Let's collaborate and lead with purpose.

The project/team leadership is accountable for ensuring that the software meets the necessary quality standards. They are also responsible for the quality strategy and signing off on the quality of the delivered product, while the software test engineers can assist by providing guidance and support, such as mentoring or coaching, and identifying and raising any gaps in the strategy.

The quality strategy should be reviewed by the entire team, including engineers, product owner, and project leadership.

The goal is for the team to use a common language and have a shared understanding of the current status, risks, and main concerns, as well as quality criteria, requirements, regulations, and standards to meet, in order to align the team on the quality measures required at each step in the development cycle.

## How much testing is enough to qualify for a software release?

'Enough' testing for a software release is achieved when:

1. critical requirements have been met
1. significant risks have been mitigated, and
1. the product’s quality is aligned with stakeholder expectations.

This doesn’t necessarily mean zero bugs, but that the software meets its intended functionality without critical issues or risks.

:::info

The 'enough' in testing balances risk, coverage, stakeholder expectations, user feedback, compliance, criticality of the software, and resource constraints to ensure the software delivers value and functions effectively in the intended environment.

:::

While Input Output aims for comprehensive coverage, testing is also a matter of risk management. We prioritize tests based on potential impact and likelihood of issues.

A release is qualified when:

1. it meets predefined acceptance criteria
1. has passed critical test cases, and
1. residual risks are deemed acceptable by stakeholders. Continuous feedback and monitoring post-release also play a vital role in ensuring software quality.

A lot depends on the type of software, its purpose, and its target audience. One would expect a far more rigorous approach to testing a mission-critical system (like Cardano) than a simple smartphone flashlight application. Yet no matter what the application, the question of how much testing is sufficient can be hard to answer in definitive terms. A better approach is to provide considerations or rules of thumb that can be used to define a qualification process and testing strategy best suited for the case at hand. The following tips provide a helpful rubric:

-   Document your process or strategy.
-   Have a solid base of lower-level tests (unit, property, etc).
-   Don’t skimp on integration testing.
-   Perform (automate) end-to-end testing for Critical User Journeys.
-   Understand and implement the other tiers of testing, and understand your coverage of code and functionality.
-   Use feedback from the field to improve your process.

## Who is responsible for software testing?

Software engineers are responsible for code and product quality (unit, integration, property tests, functional and non-functional), whereas the product owner and the software engineers in test are responsible for validating the product quality (end-to-end, exploratory, functional, and non-functional validation).

## Who is responsible for quality?

:::info

While quality is everyone's responsibility, it can paradoxically become no one's responsibility if not properly managed. This is where the concept of accountability becomes vital.

:::

Quality assurance (QA) in software development isn't a task that can be isolated to one phase or handled solely by one group of professionals. Instead, it requires a comprehensive approach throughout the entire Software Development Life Cycle (SDLC), from product requirements to delivery and monitoring.

Each phase of the SDLC - product design, architecture, implementation, final validation, delivery, and monitoring - requires dedicated attention to quality.

This collective participation ensures that each role or individual understands and takes responsibility for their contribution to the overall quality of the product.

**Quality needs to be built into and demonstrated/validated throughout the Software Development Life Cycle**. Input Output's commitment to an 'evidence-based process' aligns with this approach. This principle should permeate the company's daily activities, prompting it to consistently question and validate the quality at each stage, be it in product requirements like user stories and acceptance criteria, architecture, implementation, final testing, delivery, or monitoring. This approach not only ensures a quality product but also embeds a culture of quality and accountability throughout the organization.

## What is a disaster recovery procedure (or rollback strategy)?

This is part of the risk mitigation strategy. In case anything goes sideways, you should be prepared to mitigate it.

A software disaster recovery procedure is a plan that outlines the steps to be taken in the event of a disaster that results in the loss or damage of software applications and data. The goal of this plan is to ensure that the organization can quickly restore critical systems and data in the event of a disaster and minimize the impact on business operations.

The procedure typically includes steps such as data backup and recovery, system recovery, and application recovery. It also includes testing the recovery plan regularly to ensure that it works effectively and efficiently. The software disaster recovery procedure is an important part of an organization's overall disaster recovery plan and helps to ensure business continuity in the event of a disaster.

## Common misconceptions about the software quality strategy

### A software quality strategy is too time-consuming

While creating a software quality strategy does require some effort, it actually saves time and resources by preventing issues, optimizing development, and accelerating delivery.

By taking the time upfront to plan for quality, organizations can avoid costly mistakes and rework later on in the development process. This can save significant time and resources in the long run.

Moreover, it is important to note that not having a software quality strategy can be even more time-consuming, as it can lead to a higher number of defects, longer testing cycles, and delays in release. By having a quality strategy in place, teams and projects can proactively address potential issues and ensure that software is delivered on time and with the desired level of quality.

### A software quality strategy is too expensive

While creating a software quality strategy may involve some initial investment of time and resources, it ultimately saves an organization money by helping to prevent costly errors and rework.

Firstly, a well-planned quality strategy can help to reduce the cost of software development by catching bugs and coding errors earlier in the development cycle. This can reduce the time and effort required for testing and rework, resulting in significant cost savings.

A well thought-out quality strategy can also help to improve customer satisfaction, leading to increased revenue and profitability. By delivering high-quality software that meets customer needs and expectations, organizations can build a strong reputation for quality and reliability, leading to increased sales and customer loyalty.

Furthermore, a quality strategy can help to reduce the risk of costly errors and security breaches that can lead to legal liabilities and damage to an organization's reputation. By investing in a quality strategy, organizations can avoid the cost of fixing issues and damage control later on.

Finally, many aspects of a quality strategy, such as testing and continuous integration, can be automated, reducing the need for manual effort and lowering costs over time.

<figure>
	<img src={require("@site/static/img/quality-strategy/fast-cheap-good.png").default} alt="Fast vs. cheap vs. good" />

    <p className="img-reference">Sources: https://martinfowler.com/articles/is-quality-worth-cost.html, https://mike-bland.com/2023/10/12/what-software-quality-is-and-why-it-matters.html.</p>

</figure>

### A software quality strategy might hamper the creativity of the development team

The quality strategy serves as a guiding framework for the team/project, highlighting the essential actions required to build top-notch products. However, it doesn't prescribe specific methods or processes. Instead, it empowers the team with the autonomy and creative freedom to determine the best approach and techniques to achieve the desired quality outcomes. This balance ensures that while quality remains a core focus, innovation and adaptability are not compromised.

### A software quality strategy is only necessary for large organizations or complex software projects

Even small organizations and simpler software projects can benefit from a software quality strategy. A strategy can help to ensure that software is delivered on time, within budget, and with the desired level of quality. It can also help identify and mitigate risks before they become major issues.

### A software quality strategy is only relevant to the development team

A software quality strategy should involve all stakeholders, including business owners, engineers, and end users. By involving all stakeholders, the organization can ensure that everyone is aligned on quality goals and understands their roles and responsibilities in achieving those goals. It is important for everyone to be on the same page when it comes to quality goals and expectations.

### A software quality strategy is a one-time effort

A software quality strategy should be an ongoing effort that evolves as the project progresses. As new risks and challenges emerge, the strategy should be updated to address them. Also, the strategy should be regularly reviewed and assessed to ensure that it remains effective.

### Each product is unique and has unique processes and tools

This misconception arises because every product has its own set of features, requirements, and goals, which can make it seem like a unique and individual project. Also, there is a perception that using the same processes and tools for every project can lead to a 'one-size-fits-all' approach that does not adequately account for the specific needs of each project.

This misconception overlooks the fact that many of the processes and tools used in software development are common across projects. For example, most projects require some form of testing, documentation, and version control. While the specific details of these processes may vary from project to project, the underlying principles and tools can be standardized across teams and projects.

Furthermore, using standardized processes and tools can actually help to improve the quality and efficiency of software development projects. By using proven tools and processes that have been refined over time, organizations can avoid the need to reinvent the wheel for each project and can focus on delivering high-quality software that meets customer needs and expectations.

Overall, while each product may have unique features and requirements, it is a misconception that each project requires completely unique processes and tools. By adopting standardized processes and tools that have been proven to work across a variety of projects, teams and projects can improve efficiency, quality, and collaboration in their software development process.
