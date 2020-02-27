/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const axios = require('axios');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  // Create nodes here, generally by downloading data
  // from a remote API.
  const data = await fetch(REMOTE_API)
  // Process data into nodes.
  data.forEach(datum => createNode(processDatum(datum)))
  // We're done, return.
  return
}
