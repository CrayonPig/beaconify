import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2';
// import dts from 'rollup-plugin-dts'

const extensions = [
  '.js',
  '.ts'
]

const entry = 'packages/core/lib/index.ts'

export default [
  {
    input: entry, // 入口
    output: {
      file: './dist/bundle.js', // 出口
      format: 'iife',
      name: 'beaconify',
    },
    plugins: [
      resolve(extensions),
      commonjs(),
      serve({
        open: true,
        contentBase: ['example', 'dist'],  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
        port: 8020   //端口号，默认10001
      }),    
      livereload('dist'),   //watch dist目录，当目录中的文件发生变化时，刷新页面
      typescript({
        extensions
      })
    ]
  },
  // {
  //   input: entry,
  //   output: [{filename: 'index.d.ts', dir: 'dist/es/type', format: 'esm'}],
  //   plugins: [dts()]
  // }
]