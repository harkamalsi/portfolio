/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const sharp = require('sharp');

sharp.cache(false);
sharp.simd(false);
// You can delete this file if you're not using it
