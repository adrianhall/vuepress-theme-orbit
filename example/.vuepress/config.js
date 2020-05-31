const path = require('path');

module.exports = {
  title: 'Alan Doe | Resume',
  description: 'The resume for Alan Doe',
  theme: path.resolve(__dirname, '../..'),
  themeConfig: {
    // vuepress-plugin-seo required entry
    author: "Alan Doe"
  }
};

