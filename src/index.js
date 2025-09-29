import * as core from "@actions/core"; // GitHub Actions の入力・出力・ログ・エラー処理などを扱うライブラリ。
import * as github from "@actions/github"; // GitHub のイベントコンテキスト（トリガーされたイベントの詳細）を取得するためのライブラリ。

import http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OK\n');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet"); // Action.yml で定義された入力値 "who-to-greet" を取得。
  core.info(`Hello ${nameToGreet}!`); // GitHub Actions のログに挨拶メッセージを出力。

  // Get the current time and set it as an output variable
  const time = new Date().toTimeString(); // 現在の時刻を取得。
  core.setOutput("time", time); // action.yml で定義された "time" 出力に現在時刻をセット。

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2); // このアクションをトリガーした GitHub イベントの詳細情報（例: push, pull_request など）。
  core.info(`The event payload: ${payload}`);
} catch (error) { // 何かエラーが発生した場合、core.setFailed(...) により GitHub Actions のジョブを失敗として終了し、エラーメッセージを表示。
  core.setFailed(error.message);
}
