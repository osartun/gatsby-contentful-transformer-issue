const path = require("path")

exports.createPages = args =>
  Promise.all([createCategoryPages(args), createArticlePages(args)])

const createCategoryPages = async ({ graphql, actions: { createPage } }) => {
  const queryResult = await graphql(`
    query {
      allContentfulCategory {
        nodes {
          id
          fields {
            path
          }
        }
      }
    }
  `)

  const component = path.resolve("./src/templates/category.js")

  queryResult.data.allContentfulCategory.nodes.forEach(
    ({ id, fields: { path } }) => {
      createPage({
        path,
        component,
        context: { id },
      })
    }
  )
}

const createArticlePages = async ({ graphql, actions: { createPage } }) => {
  const queryResult = await graphql(`
    query {
      allContentfulArticle {
        nodes {
          id
          fields {
            path
          }
        }
      }
    }
  `)

  const component = path.resolve("./src/templates/article.js")

  queryResult.data.allContentfulArticle.nodes.forEach(
    ({ id, fields: { path } }) => {
      createPage({
        path,
        component,
        context: { id },
      })
    }
  )
}
