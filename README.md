# Getting started

## Install Shopify CLI

Start by installing Shopify CLI on your computer. You can install Shopify CLI on Windows, macOS, or Linux. Use your computer's command line to install Shopify CLI. [Shopify CLI](https://shopify.dev/themes/tools/cli/installation#install-shopify-cli)

```shell
gem install shopify-cli
```

## Login to store

Authenticates you, and logs you into the specified store, with Shopify CLI.

```shell
shopify login --store=https://coza-home-eu.myshopify.com/
```

## Initialize

This project use node package for different tooling and features so make sure you install node 16 and greater than.

```shell
npm install
```

## Serve

Uploads the current theme as a development theme to the store that you're connected to, and returns the following information:

- A link to your development theme at http://127.0.0.1:9292. This URL can hot reload local changes to CSS and sections, or refresh the entire page when a file changes, allowing you to preview changes in real time using the store's data.
- A link to the online store editor for the theme.
- A preview link that you can share with other developers.

```shell
npm run serve
```

## Theme Check

Theme Check is a linter for the Liquid and JSON inside your theme and theme app extensions. It detects errors and enforces Shopify theme and Liquid best practices.

Theme Check can identify several issues in your theme code. For example, it can identify the following:

- Liquid syntax errors
- Missing templates
- Unused variables and snippets
- Unknown and deprecated tags
- Excessive snippet nesting
- Performance issues

```shell
npm run check # to lint theme

npm run check:fix # to auto fix lint issue
```

# Structure

Shopify theme directory structure

```
└── ocoza
    ├── .github
    ├── .vscode
    ├── assets
    ├── config
    ├── layout
    ├── locales
    ├── sections
    ├── snippets
    ├── src
    │   └── js
    │   └── style
    └── templates
        └── customers
```
