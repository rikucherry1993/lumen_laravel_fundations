const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .vue()
  .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
  resolve:
  {
    fallback:
    {
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "stream": require.resolve("stream-browserify"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http"),
      "vm": require.resolve("vm-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "constants": require.resolve("constants-browserify"),
      "fs": false,
      "esbuild": false,
      "@swc/core": false,
      "uglify-js": false,
      "worker_threads": false,
      "child_process": false
    },
  },
});

