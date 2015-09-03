HTML Webpack Plugin
=================== 
[![npm version](https://badge.fury.io/js/sync-saver-webpack-plugin.svg)](http://badge.fury.io/js/sync-saver-webpack-plugin)
[![Dependency Status](https://david-dm.org/kirillsud/sync-saver-webpack-plugin.svg)](https://david-dm.org/kirillsud/sync-saver-webpack-plugin)
[![bitHound Score](https://www.bithound.io/github/kirillsud/sync-saver-webpack-plugin/badges/score.svg)](https://www.bithound.io/github/kirillsud/sync-saver-webpack-plugin)

This is a [webpack](http://webpack.github.io/) plugin that makes synchronous saving of generated assets. 
Tehnicaly plugin just replaces origin outputFileSystem.writeFile method by fs.writeFileSync.

Installation
------------
Install the plugin with npm:

```shell
$ npm install sync-saver-webpack-plugin --save-dev
```

Basic Usage
-----------

Just add the plugin to your webpack config as follows:

```javascript
var SyncSaverWebpackPlugin = require('sync-saver-webpack-plugin')
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new SuncSaverWebpackPlugin()]
}
```


Configuration
-------------
You can pass a hash of configuration options to `SyncSaverWebpackPlugin`.
Allowed values are as follows:

- `debug`: Enables verbose output in the webpack console.
