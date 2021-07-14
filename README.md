# Reproduction of gatsby-source-contentful issue

Find the issue here: [gatsbyjs/gatsby#32363](https://github.com/gatsbyjs/gatsby/issues/32363)

## Issue

Gatsby allows plugins to transform the nodes that were sourced by a different plugin. Those are called [transformer plugins](https://www.gatsbyjs.com/docs/tutorial/part-six/#gatsby-skip-here).

However, there's an issue for transformer plugins on top of `gatsby-source-contentful`: The transformer plugin is called while the source plugin is still sourcing nodes. That way referenced nodes – even though their ID is already present – can't be resolved. Specifically, references to nodes of a different Contentful content type.

This issue didn't exist in `v2.1.100` and was introduced in version `v2.2.x` of `gatsby-source-contentful`.

## This repo

This repo contains two directories:

- `v2` This is a working sample with Gatsby v2 and `gatsby-source-contentful` `v2.1.100`. Everything works well.
- `v3` This is the same code as in the `v2` folder but with the latest Gatsby and `gatsby-source-contentful` versions. The build breaks when a referenced node is trying to be accessed.

## Run it

After cloning the repo run the test cases individually.

```bs
cd v2
npm install && npx gatsby develop
```

```bs
cd v3
npm install && npx gatsby develop
```
