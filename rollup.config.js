import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // or your entry file
  output: {
    dir: 'dist',
    format: 'cjs', // or 'es' for ECMAScript module
  },
  plugins: [
    typescript(), // assuming you are using TypeScript
    css({ output: 'dist/Header.css' }), // specify the output file
    // other plugins...
  ],
};
