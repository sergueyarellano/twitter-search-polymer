module.exports = {
  staticFileGlobs: [
    'src/**/**.html',
    '*.html'
  ],
  stripPrefix: 'src/',
  runtimeCaching: [{
    urlPattern: /^http:/,
    handler: 'networkFirst'
  }]
};
