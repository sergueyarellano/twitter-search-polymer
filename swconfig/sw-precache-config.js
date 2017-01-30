module.exports = {
  staticFileGlobs: [
    'src/**/**.html',
    '*.html'
  ],
  stripPrefix: 'src/',
  runtimeCaching: [{
    urlPattern: /^http:\/\/127\.0\.0\.1:3000\/api/,
    handler: 'networkFirst'
  },{
    urlPattern: /^\?q=/,
    handler: 'fastest',
    options: {
        cache: {
          maxEntries: 10,
          name: 'req-cache'
        }
    }
  }]
};
