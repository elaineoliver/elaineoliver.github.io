# *Proposal MSC Design System*

Congratulations on your decision to build a design system for your suite of frontend applications\! A design system will help ensure that your applications are consistent with your brand, accessible and fast. Building a design system is not without its challenges however. The following recommendations will help your team be as successful as possible. 

A simple proof-of-concept illustrating some of the recommendations in this document is available in this reponsitory.

## *Documenting designs and creating a style library*

# Your team has already chosen [Figma](https://www.figma.com/) to document your design decisions and facilitate collaboration between designers and developers. To get the most from your design documentation:

* Make sure everyone on your team has access to Figma, not just the designers.

* Make sure that designers and developers are sharing the same CSS values for font-sizes, colors and other styles. Figma can help you create a structured (json) list of [CSS tokens](https://docs.tokens.studio/), known as a style library or dictionary, that can be shared between designers and developers. 

* Make sure the team agrees on the structure of the designs and naming conventions for components and tokens. Agreeing on naming conventions is no easy task, but HTML and CSS terminology (h1 \- h6, :hover, :visited, :focus, :active) is a good place to start.

* Use Figma’s [semantic versioning](https://www.figma.com/community/plugin/1046106377087666849/semantic-versioning) feature so developers will know which designs are old, which are ready to be developed, and which are still in the concept phase.

## *Developing UI components in code*

Your team has already decided to develop UI components based on browser native [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). Web components will ensure that your UI components work now and in the future, with any framework or without any framework at all. Your team has also decided to use the [Lit.dev](https://lit.dev/) web component library to speed up development and give your team lots of flexibility in setting up your project. In addition you’ll want to use the following tools to make sure your code is as robust as possible:

* [Typescript](https://www.typescriptlang.org/), a variant of Javascript, to prevent bugs and improve security

* [Vite](https://vitejs.dev/) web bundler which already has a template for Lit \+ Typescript and configuration options for components libraries

* Static code analysis tools, known as linters, to report coding problems and (gently) enforce coding conventions agreed upon by your team. Linters to consider are [Eslint](https://eslint.org/), [Eslint Plugin Lit](https://www.npmjs.com/package/eslint-plugin-lit), [Eslint Plugin Lit A11y](https://www.npmjs.com/package/eslint-plugin-lit-a11y) (for accessibility) and [Stylelint](https://www.npmjs.com/package/stylelint) (for CSS).

* [Prettier](https://prettier.io/) to format code automatically

* (Optional) If you wish to write the CSS for your components in separate files using [Sass](https://sass-lang.com/), just compile the Sass to CSS and then inject it into the “css” function of the relevant Lit component.

## *Documenting and testing*

Once you have built some components you’ll want to document them and test them thoroughly. 

* Online interactive documentation is a great way to show off your work and help stakeholders and consumers find out what your components can do. [Storybook](https://storybook.js.org/docs) is a popular choice for creating interactive documentation, but many other tools are available.

* Testing includes manual testing by your team and automated testing using a test runner. Many test runners are available, but [Playwright](https://playwright.dev/) is one of the best for testing web components. Playwright can automatically find elements in the Shadow DOM, detect basic accessibility problems, compare screenshots, and run tests in different browsers and platforms. To get the most from your tests you’ll want to do both functional and visual testing of components in isolation and in combination with each other. You can even test your online documentation\!

## *Building and deploying*

Your component library is a product and should be treated as such. In addition to tried and true development practices such as change management and code reviews, your team will want to set up a robust deployment pipeline. There are as many ways to build and deploy a component library as there are component libraries, but the following practices are baseline industry standards:

* Use a Continuous Deployment / Continuous Integration tool such as [GitHub Actions](https://docs.github.com/en/actions) or [CircleCI](https://circleci.com/) so you can release new versions of your components as often as needed without sacrificing quality.

* Set up your CD/CI pipeline to run automated checks (linting and testing) before code is deployed to any environment. If linting and testing fails then deployment should be blocked.

* Set up your CD/CI pipeline to deploy to at least two environments: A test environment for quality control, and a production environment for releasing approved changes.

* Once the build and all automated checks have succeeded, set up your pipeline to release online documentation and publish your components in the desired format, usually an NPM (Node Package Manager) package or a CDN (Content Delivery Network) url. Use semantic versioning and release notes so consumers can pick the version they want to use and know what has been changed in each version.

## *Best practices*

### *Branding and theming*

Once you have set up a style dictionary, pass CSS tokens to the components using CSS custom properties, sometimes called CSS variables. CSS custom properties can change values “on the fly” while an application is running, so you won’t need to rebuild your components every time the CSS tokens are updated. CSS custom properties also make it easy for your components to support multiple themes, a light theme and a dark theme for example, or even multiple brands, a.k.a. white labeling. 

Typically the custom properties are defined in a global stylesheet hosted by the application using the components. Each brand has a separate stylesheet and each stylesheet defines all the themes supported by the brand. For example:

### *Accessibility*

Accessible UI components are the foundation of any accessible web application. Components must be built to be accessible from the start. Building components and adding accessibility “features” later will only lead to frustration and unneeded work. Ideally your team will have some basic accessibility training and know their way around the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/). It’s also wise to have an accessibility specialist on hand who can highlight accessibility issues and deal with the hardest problems. In addition, the following practices are recommended to ensure that your components remain accessible during the lifetime of your component library:

* Test components manually. Automated accessibility checkers such as aXe (included in Playwright) only find 30 to 50% of accessibility problems. 

* Write unit tests to [find elements by accessible name and role](https://playwright.dev/docs/api/class-framelocator#frame-locator-get-by-role), just like browsers do. Test interactive elements for both mouse and keyboard actions.

* Include automated accessibility testing in the checks that your CD/CI performs on each and every deployment.

* Help consumers of your components use them in an accessible way. Documentation is great, but console warnings are even better.

  For example, web components have some unfortunate quirks when it comes to ARIA attributes. (There is a [mature proposal](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md) on the table to address the issue but it is not part of the standard yet.) Adding the “aria-expanded” attribute to a web component that emits a button is valid HTML, but the browser will not interpret it correctly and the end user will not receive the information. Instead, component developers can create a custom attribute “expanded”, which will work correctly, and program a warning for consumers who try to use the aria attribute instead. For example:


### *Scalability and performance*

Web components are generally faster and more scalable than components written in a framework such as React or Vue, but the following approaches are recommended to keep your components as fast and scalable as possible: 

* Make the browser do the work. Use browser native APIs instead of custom javascript whenever possible. Write polyfills and small workarounds by hand if needed. For example, instead of writing (or installing) buckets of custom javascript to create a (hopefully accessible) modal dialog, use the browser’s [dialog API](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) instead.

* Make sure components have as few external dependencies as possible. If it looks like a plugin must be installed then discuss it with the team first.

* Make sure components have as few dependencies on each other as possible. One component that imports two components that each import two more components and so on will quickly turn into a slow and unmanageable mess. A better approach, called composition, is to add “slots” to components so other components can be nested inside. For example:


* Make sure consumers of your components can import one component at a time without loading the rest of the library in the background. Configure [separate entry points](https://vitejs.dev/guide/build.html#library-mode) for each component using Vite and [define exports](https://nodejs.org/api/packages.html#subpath-exports) in package.json.

* Treat assets such as font files, logos and icons as components. Don’t import them into other components, just nest (or compose) them, and make sure they can be loaded one at a time. 
