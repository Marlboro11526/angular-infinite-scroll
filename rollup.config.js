const closure = require('rollup-plugin-closure-compiler-js');

export default {
  entry: 'src/Main.js',
  dest: 'dist/AngularInfiniteScroll.min.js',
  format: 'iife',
  sourceMap: false,
  plugins: [
    closure({
      compilationLevel: 'SIMPLE'
    })
  ]
};