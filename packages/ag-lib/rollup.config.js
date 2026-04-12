import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: "src/index.ts",
  output: [
    {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,          // Giữ nguyên cấu trúc module
      preserveModulesRoot: 'src',     // Bỏ prefix "src"
      entryFileNames: '[name].js',
      sourcemap: true
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true
    }
  ],
  external: [
    peerDepsExternal(),
    "tslib"
  ],

  plugins: [typescript({ sourceMap: true, inlineSources: true })]
};