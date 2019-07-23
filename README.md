# webplate

## 事前準備

* [node.js](https://nodejs.org/ja/)をインストール
* お好きなGitクライアントをインストール

## 環境作成

### レポジトリのクローン

Gitクライアントからレポジトリをクローンします。コマンドライン版であれば、

```
git clone https://github.com/katsunuma-m/webplate.git
```

### NPMライブラリのインストール

コマンドプロンプトかPowerShellでレポジトリをクローンした場所に移動し、以下のコマンドを実行してください。

```
npm install
```

## 編集要領

srcの下のファイルを編集します。

```
npm run dev
```

で、確認用のWebサーバが起動します。http://localhost:8080/index.html でアクセスできます。起動中にsrcのファイルを編集した場合は結果が反映されます。

CSSのフレームワークには[Bulma](https://bulma.io/)を使用しています。

## ビルド

```
npm run build
```

でデプロイ用のファイルがdistの下に作成されます。
