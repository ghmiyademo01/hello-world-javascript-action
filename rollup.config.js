import commonjs from "@rollup/plugin-commonjs"; // CommonJS 形式のモジュール（requireやmodule.exportsを使うもの）を ES モジュール形式に変換します。npm パッケージの多くは CommonJS なので、これがないと Rollup で扱えません。 
import { nodeResolve } from "@rollup/plugin-node-resolve"; // Node.js のモジュール解決ロジックを使って、node_modules 内の依存関係を解決します。 import で外部ライブラリを使えるようにするために必要です。

const config = {
  input: "src/index.js", // バンドルのエントリーポイント。src/index.js から依存関係をたどってまとめます。
  output: {
    esModule: true, // CommonJS との互換性を保つために __esModule フラグを付与します。
    file: "dist/index.js", // 出力先
    format: "es", // 出力形式 ES Modules）
    sourcemap: true, // ソースマップを生成して、デバッグ時に元のコードを追跡可能にします。
  },
  plugins: [commonjs(), nodeResolve({ preferBuiltins: true })], // CommonJS モジュールを ES モジュールに変換、Node.js の組み込みモジュールを優先して解決します
};

export default config; // Rollup がこの設定を読み込むために export default でエクスポート。