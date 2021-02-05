// Use it for github pages, otherwise remove it

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/taxonworks_stats/'
    : '/'
}
