---
slug: local-testing-partner-chains
title: 'Partner Chains Development Lifecycle: Our CI Evolution'
authors: [christos, skylar]
tags: [Quality Strategy]
---

## Testing requirements: the need for a smaller epoch Cardano network

The partner chains project revealed the criticality of a fast-epoch network for rapid code testing and result analysis.

<!-- truncate -->

## First iteration: private testnet

The first solution involved a private Cardano testnet with **two-hour epochs**, in contrast to the  preview network's **24-hour epochs** or the mainnet's **five days**. 

This approach, while faster, introduced substantial operational overheads. With only one site reliability engineer (SRE) responsible for both testnet maintenance and other critical partner chains infrastructure, the system proved unsustainable. 

The private testnet was ultimately decommissioned during the migration from a Scala node implementation to a Substrate-based Rust node.

## Second iteration: preview testnet and increased complexity

Shifting to the Cardano preview testnet introduced new complexities in the testing framework. The 24-hour epoch length meant that test operations requiring an epoch change could no longer complete in a single run. 

This required us to adapt our end-to-end tests:

- Save the state of the test run
- Obtain the result the next time the test would run after the epoch change
- Add database functionality for state management
- Implement time management methods

These requirements significantly increased both system complexity and test execution time.

## Third iteration: Cardano local cluster breakthrough

The introduction of the Cardano local cluster represented a breakthrough in our testing infrastructure. This solution offered **epoch times of two minutes or less** and full local network control. With support from the Cardano node team, we managed to get a local network up and running very quickly. Many new possibilities promptly emerged.

<img align="center" width="100%" src={require("@site/static/img/blog/003-local-testing-partner-chains.png").default} alt="Local testing partner chains" />

*Note that partner-chains-node-3 (Charlie) and partner-chains-node-5 (Eve) are by default passive nodes. If desired for the local testing environment, the tester could add Charlie as permissioned or register Eve.*

## Implementation: Containerized partner chain demo environment

First, we developed a Docker-based demonstration environment packaging all dependencies and nodes into the following 10 containers:

* 1x Cardano node
* 1x DB-Sync instance
* 1x Kupo indexer
* 1x Ogmios interface
* 1x for partner chain smart contracts, and
* 5x partner chain nodes.

The setup process features an interactive CLI with binary (Y/N) configuration options. Once the artifacts are downloaded, it takes less than 10 minutes to have a functional partner chain from genesis. 

<img align="center" width="100%" src={require("@site/static/img/blog/003-local-testing-partner-chains-2.png").default} alt="Running partner chains locally" />

### Testing framework evolution

The local environment dramatically improved our testing capabilities. Instead of waiting for two days to get the results of a complete test run on a partner chain following the preview testnet, we could now use the local environment and get results within 15 minutes, opening the way for improvements to continuous integration (CI) and continuous deployment (CD). 

| Aspect | Previous Approach | Current Approach |
| ------ | ----------------- | ---------------- |
| Environment | Cardano Preview Testnet | Local |
| Test execution time | 48 hours | 15 minutes | 
| Limitations | Limited by epoch boundaries | No epoch-related boundaries |
| State | Required state management between runs | Stateless test execution |

### CI improvements

For CI, we replaced a smoke test upon a pull request (PR) with the full suite of tests on the local environment. The local environment enabled a significant enhancement of our CI pipeline:

Previous approach:
- Limited smoke tests on PRs
- A subset of tests constrained by epoch boundaries.

Enhanced approach:
- Full test suite execution on PRs
- Minimal overhead (two to three minutes additional runtime).

### CD improvements

Similarly, the local environment also transformed our CD and delivery strategy. With a new deployment flow, we automatically test each release candidate in the local environment first, then progressively deploy across other environments. 

### Improving verification for hard fork protocol upgrades

While the progress hither to was significant, the local environment truly demonstrated its highest value during protocol upgrades, specifically during the Chang and Plomin hard forks.

When the Chang hard fork was announced, we didn’t yet have the local partner chain environment ready. We had to upgrade our dependencies to use the latest hard fork compatible Cardano node.

Each iteration took a long time to be tested, as we had to wait for a public environment to be forked, usually SanchoNet first, and we also had to wait 24 hours for any test result. That left us with a very tight deadline before the preview testnet was forked to fix any bugs.

However, with the next hard fork, we could fork our local environment to the protocol version we desired and upgrade our dependencies, even before SanchoNet was forked. We could also start a local partner chain in the previous Cardano era, perform the hard fork locally, and observe and validate the normal operation. This saved days in time.

This new workflow transformed hard fork upgrades from high-risk operations with limited testing windows into controlled and thoroughly validated protocol transitions. 

### Dependency management evolution

Previously, we had to deploy the new version to some nodes in our infrastructure and test. Local environments have transformed our approach to dependency management and version control.

The system has evolved from an experimental suggestion into a critical component of our development infrastructure, fundamentally improving our ability to manage and validate system dependencies with confidence.

## Conclusion

Now, we can simply choose any version with which we want to generate a new environment and perform the test. The response times were slashed from days to minutes. Not only that, but we now have confidence in changing a version of our infrastructure, as we have already verified that it works locally.

All in all, this marked a very significant improvement in our software development lifecycle. It was implemented and tested once the team understood its importance and value, and quickly adopted by the whole tribe (and beyond!).

To learn more, [view the code and read the documentation](https://github.com/input-output-hk/partner-chains/blob/master/dev/local-environment/README.md).
