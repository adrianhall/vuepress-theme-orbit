const path = require('path');

module.exports = (options, ctx) => ({
  plugins: {
    'seo': {
      /* seo options */
    }
  },

  devTemplate: path.resolve(__dirname, 'templates/devTemplate.html'),
  ssrTemplate: path.resolve(__dirname, 'templates/ssrTemplate.html')
});
