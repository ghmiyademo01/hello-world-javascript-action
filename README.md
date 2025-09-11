#  Hello world JavaScript アクション

このアクションは、ログに「Hello World」または「Hello」＋挨拶する相手の名前のいずれかを表示します。

## Inputs

### `who-to-greet`

**必須** 挨拶する相手の名。デフォルトは `「World」`。

## Outputs

### `time`

挨拶を行った時刻。

## Example usage

*```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: Mona the Octocat
*```