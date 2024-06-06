import { defineConfig } from "rollup";
import babel from '@rollup/plugin-babel';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
export default defineConfig({
    input:'src/index.js',
    output:{
        dir:'dist',
        format:'es',
        name:'counter-pack-2'
    },
    external:['react','react-dom'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled'
      })
      ]
})