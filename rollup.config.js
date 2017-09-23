const closure = require('rollup-plugin-closure-compiler-js');

export default {
  entry: 'src/js/Main.js',
  dest: 'dist/js/AngularInfiniteScroll.min.js',
  format: 'iife',
  sourceMap: false,
  plugins: [
    closure({
      compilationLevel: 'SIMPLE'
    })
  ]
};