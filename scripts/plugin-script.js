import { extensions } from "./const.js";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import eslint from '@rollup/plugin-eslint';

const pluginLists = [
  {
    name: 'pluginBrowser',
    inputPath: 'packages/plugin-browser/lib/index.ts',
  }
]


function createPluginConfig(plugins) {
  const rollupPluginConfig = [];
  plugins.forEach(plugin => {
    rollupPluginConfig.push({
      input: plugin.inputPath, // 入口
      output: {
        file: './dist/' + plugin.name + '.js', // 出口
        format: 'iife',
        name: plugin.name
      },
      extensions,
      plugins: [
        resolve(extensions),
        commonjs(),
        typescript({
          extensions
        }),
        eslint({
          include: ['packages/**/*.ts'],
          throwOnError: true
        })
      ]
    })
  });

  return rollupPluginConfig;
}

export default createPluginConfig(pluginLists);