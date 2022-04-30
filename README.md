# E-Portfolio Docusaurus
![Docusaurus](/Images/docusaurus-dark-background.png?raw=true "Docusaurus")

This repository is part of my E-Portfolio for the Software Engineering 2022 course at DHBW Karlsruhe. The slides of the presentation and the demo code can be found in the respective folders in this repository. 
If you want to participate during the demo, feel free to follow the steps under "Getting Started" in advance :)

## Table of Content

1.  [Introduction](#introduction)
2.  [Docusaurus](#docusaurus)
3.  [Virtues](#virtues) 
3.  [Quickstart](#quick)    
4.  [Getting Started](#getting) 
    1. [Requirements](#req)
    2. [Project Structure](#structure)
    3. [Build](#build)

<a name="introduction"></a>

## Introduction
Welcome to the introduction of Docusaurus, as part of my E-portfolio for the Software Engineering 2022 course at DHBW Karlsruhe. Writing clear and concise documentation quickly and reliably is essential for modern corporate culture. Focusing on writing the text rather than wasting time on technical challenges can significantly impact efficiency. This is where Docusaurus enters the game! 


<a name="docusaurus"></a>

## What is Docusaurus
Docusaurus is an open source project for building and maintaining websites with familiar tools like [Markdown](https://www.markdownguide.org/) and [MDX](https://mdxjs.com/).

<a name="virtues"></a>

## Virtues
Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation, leveraging the full power of React to make a site interactive. It provides out-of-the-box documentation features but can be used to create any kind of site (personal website, product, blog, marketing landing pages, etc.).

- Built with React: Extend and customize with React
- Pluggable: Bootstrap your site with a basic template, then use advanced features and plugins
- SEO friendly: HTML files are statically generated for every possible path.
- Powered by MDX: Write interactive components via JSX and React embedded in markdown and share code in live editors
- Search: The site is fully searchable.
- Document Versioning: Helps to keep documentation in sync with project releases.
- Internationalization (i18n): Translate a site in multiple locales.

<a name="quick"></a>

## Quickstart

If you prefer to run a demo quickly, Docusaurus offers the possibility to set up a demonstration page that provides a short tutorial.

First install [Node.js](https://nodejs.org/en/download/) and create a new Docusaurus site with following command:

```bash 
npx create-docusaurus@latest my-website classic 
```
After the installation enter the folder and start the site:

```bash 
cd my-website
npx docusaurus start
```
Open <a href = http://localhost:3000> http://localhost:3000 </a> and have fun with the tutorial!

Alternatively, the code can be tried out [directly](https://stackblitz.com/github/facebook/docusaurus/tree/starter), or the tutorial can be viewed [online](https://tutorial.docusaurus.io/).
<a name="getting"></a>

## Getting Started
In the following section, the configuration of Docusaurus will be explained.
<a name="req"></a>

### 1. Requirements
A [Node.js](https://nodejs.org/en/download/) version higher or equal 14 is necessary. This can be checked with: 
```bash 
node -v
```
In case Node will be installed, it is recommended to select all checkboxes related to dependencies.
It is easy to structure a framing Docusaurus website with the command line. You can run the command anywhere in a new empty repository or within an existing repository. It will assemble a new directory containing the structured files.
```bash 
npx create-docusaurus@latest [name] [template]
```
For example:
```bash 
npx create-docusaurus@latest website classic
```
The classic template includes standard documentation, a blog, custom pages, and a CSS framework (with dark mode support). It can get up and running extremely quickly with the classic template.
<a name="structure"></a>

### 2. Project Structure
After the configuration, it is now time to move on to the structure.
In the new directory follwing files will appear:

```bash 
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- /blog/ - Contains the blog Markdown files. More about blogs [here](https://docusaurus.io/docs/blog)
- /docs/ - Contains the Markdown files for the docs. Additional information can be found [here](https://docusaurus.io/docs/docs-markdown-features)
- /src/ - Non-documentation files like pages or custom React components. 
- /docusaurus.config.js - A config file containing the site configuration. 
- /package.json - A Docusaurus website is a React app, meaning any npm packages can be installed.

<a name="build"></a>

### 3. Build

A local development server that will serve the website and reflect the latest changes can be started to preview the changes after editing files:

```bash  
cd website
npm run start
```
By default, a browser window will open at http://localhost:3000.

So much for the configuration 🦖
