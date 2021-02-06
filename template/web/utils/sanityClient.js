const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: "03o8ro0z",
    dataset: "production",
    useCdn: true // `false` if you want to ensure fresh data
})
