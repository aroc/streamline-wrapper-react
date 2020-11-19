import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from "rollup-plugin-terser"

const NODE_ENV = process.env.NODE_ENV || "development"
const outputFile = NODE_ENV === "production" ? "prod.js" : "dev.js"

export default {
  input: 'src/index.js',
  output: [ {
    file: `./lib/${outputFile}`,
    format: 'cjs'
  },
    {
      file: `./es/${outputFile}`,
      format: 'es'
    }
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    postcss({
      plugins: []
    }),
    resolve(),
    commonjs(),
    terser(),
  ],
};
