import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import typescript from 'rollup-plugin-typescript2';
import eslint from '@rollup/plugin-eslint';

const extensions = [
  '.js',
  '.ts'
];

export default {
  input: 'packages/core/lib/index.ts', // 入口
  output: {
    file: './dist/bundle.js', // 出口
    format: 'iife',
    name: 'Beaconify'
  },
  extensions,
  plugins: [
    resolve(extensions),
    commonjs(),
    serve({
      open: true,
      contentBase: ['example', 'dist'], // 服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
      port: 8020 // 端口号，默认10001
    }),
    livereload('dist'), // watch dist目录，当目录中的文件发生变化时，刷新页面
    typescript({
      extensions
    }),
    eslint({
      include: ['packages/**/*.ts'],
      throwOnError: true
    })
  ]
};
