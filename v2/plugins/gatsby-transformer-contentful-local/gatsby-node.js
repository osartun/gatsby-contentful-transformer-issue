exports.onCreateNode = args => {
  const { node } = args
  if (node.internal.owner === "gatsby-source-contentful") {
    extendContentfulNode(args)
  }
}

const extendContentfulNode = args => {
  const { node } = args
  switch (node.internal.type) {
    case "ContentfulCategory":
      return extendContentfulCategory(args)
    case "ContentfulArticle":
      return extendContentfulArticle(args)
  }
}

const extendContentfulCategory = ({
  node,
  getNode,
  actions: { createNodeField },
}) => {
  const parentCategoryNodeId = node.parentCategory___NODE
  const isSubcategory = !!parentCategoryNodeId
  // Accessing the parentCategoryNode works fine for some reason even if the subcategory is
  // processed before the parent category
  const parentCategoryNode = parentCategoryNodeId
    ? getNode(parentCategoryNodeId)
    : null

  createNodeField({
    node,
    name: `path`,
    value: isSubcategory
      ? `/${parentCategoryNode.slug}/${node.slug}/`
      : `/${node.slug}/`,
  })
}

const extendContentfulArticle = ({
  node,
  getNode,
  actions: { createNodeField },
}) => {
  // In this Gatsby v2 repo there's no issue and the transformer plugin succeeds
  const categoryNode = getNode(node.category___NODE)

  createNodeField({
    node,
    name: `path`,
    value: `/${categoryNode.slug}/${node.slug}/`,
  })
}
