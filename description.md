# しりとりアプリを作ってみよう！

## はじめに

今回のインターンシップの選考課題では、「しりとりアプリ」を実装して提出していただきます。  
使用言語やフレームワークに制限はありませんので、得意な環境で取り組んでください。

特に環境に拘りの無い方は、Denoを使用して実装してみてください。
ここでは、例としてDenoを使用した実装方法の概要を紹介します。

## Step 0. GitHubアカウントの作成

作成したWebアプリケーションの提出等に必要なため、GitHubアカウントを作成しましょう。  
以下のWebサイトからアカウント登録を行ってください。

> 注意！
> GitHubのアカウントを複数持つことは利用規約で禁止されています。既にアカウントをお持ちの方は、そちらのアカウントをご利用ください

https://github.com/

## Step 1. Denoのインストール

### Deno (ディーノ) とは

Denoは、JavaScript/TypeScriptの実行環境(ランタイム)です。これらの言語でサーバーの処理を実装できます。
ここでは、入門者向けとしてJavaScriptを使用します。TypeScriptの使用方法が分かる方は、そちらを使用していただいても問題ありません。

Webフロントエンドで多く用いられるJavaScriptを使用するため、フロントエンドとバックエンドを同一言語で実装できます。  
DenoはNode.jsの作者であるライアン・ダール氏によって実装されたランタイムで、Node.jsをブラッシュアップしたものとなっています。

> Denoという名前は、Nodeのアナグラムだそうですよ！

### Denoのインストール

公式サイトの説明に従い、Denoをインストールしてみましょう。

https://docs.deno.com/runtime/manual

「Install Deno」の項目に記載されたコマンドをご自身のOSに合わせて実行するだけで、インストールが可能です。  
インストールが完了したら、以下のコマンドを実行してみましょう。バージョン情報が表示されればOKです！

```sh
# 入力
deno --version

# 出力
# deno 1.42.2 (release, aarch64-apple-darwin)
# v8 12.3.219.9
# typescript 5.4.3
```

### DenoでHello World

Hello Worldプログラムを作って実行してみましょう。  
空のフォルダを作り、中に `server.js` を作成して、以下のプログラムを書き込んでください。

```js
console.log("Hello World!");
```

保存が完了したら、Denoで実行してみましょう！

```sh
deno server.js

# Hello World!
```

## Step 2. Visual Studio Codeのインストール・セットアップ

### Visual Studio Codeとは

Microsoftが提供しているソースコードエディタです。VS Codeとも呼ばれます。  
開発に必要な機能の多くを踏襲しており、プラグインの開発も企業・個人問わず行われているので、特に拘りが無ければインストールをおすすめします。

既にお気に入りのエディタがある場合は、インストールせずに進めていただいても構いません。

### Visual Studio Codeのインストール

公式サイトの説明に従い、Visual Studio Codeをインストールしてみましょう。

https://code.visualstudio.com/

ご自身のOSに合わせたものをダウンロードして、インストールしましょう。

### Denoの拡張機能をインストール

VS CodeにDenoの拡張機能をインストールしましょう。画面左側の「Extensions」アイコンから拡張機能の画面を開き、「Deno」で検索して、インストールしてください。

![](./imgs/01_vscode-deno-install.png)

### Denoの拡張機能をセットアップ

`server.js`を作成したフォルダで、Denoの拡張機能の設定を行いましょう。「Control+Shift+P」でコマンドパレットを開き、「Deno: Initialize Workspace Configuration」を実行します。  
`.vscode/settings.json`が作成され、Deno関連の補完が効くようになったらOKです。

![](./imgs/02_vscode-deno-setup.png)

![](./imgs/03_vscode-deno-setup-check.png)