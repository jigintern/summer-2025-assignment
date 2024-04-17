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

Denoは、JavaScript/TypeScriptの実行環境(ランタイム)です。これらの言語でサーバーーの処理を実装できます。
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

```
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


## Step 3. DenoでHTTPサーバーを立ててみよう

DenoでHTTPサーバーを立ち上げてみましょう。

HTTPサーバーとは、HTTP (HyperText Transfer Protocol) でブラウザと通信するサーバーです。HTTPサーバー上に処理やデザイン等を記述することで、様々なWebアプリを動作させられます。  
Denoが提供している`serve`関数を利用することで、簡単にHTTPサーバーを立ち上げることができます。

以下に実装と作動の手順を示します。

1. `server.js`の内容を以下のように書き換えて保存してください。

```
// server.js

// deno.landに公開されているモジュールをimport
// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

// localhostにDenoのHTTPサーバを展開
serve(request => {
    return new Response("Hello Deno!");
});
```

2. `--allow-net`オプションをつけて`server.js`を起動してください。このオプションがない場合、Denoがネットワークにアクセスできません。

```sh
deno run --allow-net server.js
```

3. ブラウザで`http://localhost:8000`にアクセスしてみましょう。

4. ブラウザに`Hello Deno!`と表示されればOKです！

![](./imgs/04_tutorial-hello-deno.png)

5. 動作が確認できたら、「Control+C」でプログラムを終了します。

## Step 4. サーバーに変数を定義してみよう

HTTPサーバー上にアクセス数をカウントする変数を追加して、アクセス数を確認してみましょう。

1. `server.js`ファイルを以下の内容で編集します。

```diff
// server.js

// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

+ // アクセス数を保持する変数をグローバル領域に定義
+ let count = 0;
+ 
// localhostにDenoのHTTPサーバを展開
serve(request => {
-     return new Response("Hello Deno!");
+     count++;
+     return new Response(`Count: ${count}`);
});
```

2. `--allow-net`に加えて、`--watch`オプションを追加して`server.js`を起動してください。このオプションを指定すると、Denoがファイルの変更を自動でサーバーに反映してくれます。

```sh
deno run --allow-net --watch server.js
```

3. ブラウザで`http://localhost:8000`にアクセスしてみましょう。

4. 何回かアクセスして、ブラウザにアクセス回数が表示されればOKです！尚、ブラウザが自動で`/favicon.ico`を取得しようとするため、カウントが2ずつカウントアップすることがあります。

![](./imgs/05_tutorial-access-count.png)

## Step 5. HTMLを表示してみよう

ブラウザにHTMLを表示させてみましょう。レスポンスに`h1`タグをつけ、ヘッダ情報を指定します。

今回はヘッダ情報の`Content-Type`に`text/html`を指定して、ブラウザにHTML形式のデータを返すことを通知します。`Content-Type`には様々なものがあり、例として以下のようなものが挙げられます。

| Content-Type | データ |
| -- | -- |
| text/html | HTML |
| text/css | CSS |
| text/javascript | JavaScript |
| application/json | JSON形式 |
| image/jpeg | 画像（JPEG）ファイル |
| image/png | 画像（PNG）ファイル |

1. `server.js`ファイルを以下の内容で編集します。

```diff
// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

- // アクセス数を保持する変数をグローバル領域に定義
- let count = 0;
- 
// localhostにDenoのHTTPサーバを展開
serve(request => {
-     count++;
-     return new Response(`Count: ${count}`);
+     return new Response(
+         // Responseの第一引数にレスポンスのbodyを設置
+         "<h1>H1見出しです</h1>",
+         // Responseの第二引数にヘッダ情報等の付加情報を設置
+         {
+             // レスポンスにヘッダ情報を付加
+             headers: {
+                 // text/html形式のデータで、文字コードはUTF-8であること
+                 "Content-Type": "text/html; charset=utf-8"
+             }
+         }
+     );
});
```

2. ブラウザを再読み込みして、`H1見出しです`と大きく表示されればOKです！

![](./imgs/06_tutorial-h1-tag.png)

## Step 6. ファイルサーバを実装してみよう

### HTMLファイルを読み込んでみよう

直前のセクションではHTMLを文字列としてスクリプト内に直に記述しましたが、別のファイルとして保存しておいたものを読み込むようにしてみましょう。

また、ファイルの読み込みが完了するまではレスポンスを返さないように、処理に`async-await`を追加します。JavaScriptでは非同期処理が採用されているため、`async-await`を記載しなければファイルがうまく表示できない場合があります。

> Topic: 「JavaScript 非同期処理」「JavaScript async await」などで調べてみましょう。

1. `public`フォルダを作成し、中に`index.html`を作成します。フォルダ構成は以下のようになります。

```
├─ .vscode/
├─ public/
│  └─ index.html
└─ server.js
```

2. `index.html`ファイルに以下の内容を記述します。

```diff
<!DOCTYPE html>
<html>

<!-- headタグの中にはメタデータ等を記載する -->
<head>
  <meta charset="utf-8">
</head>

<!-- bodyタグの中には実際に表示するものなどを書く -->
<body>
  <h1>H1見出しですよ</h1>
</body>

</html>
```

3. `server.js`ファイルを以下の内容で編集します。

```diff
// deno.landに公開されているモジュールをimport
// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

// localhostにDenoのHTTPサーバを展開
- serve(request => {
+ serve(async (request) => {
+     const htmlText = await Deno.readTextFile("./public/index.html");
    return new Response(
        // Responseの第一引数にレスポンスのbodyを設置
-         "<h1>H1見出しです</h1>",
+         htmlText,
        // Responseの第二引数にヘッダ情報等の付加情報を設置
        {
            // レスポンスにヘッダ情報を付加
...
```

4. ブラウザを再読み込みして、`H1見出しですよ`と大きく表示されればOKです！

![](./imgs/07_tutorial-read-file.png)

### CSSファイルを読み込んでみよう

CSSファイルを作成して、読み込めるようにしてみましょう。`index.html`とは別に`styles.css`を作成し、このファイルを読み込めるようにします。

1. `public`フォルダの中に、`styles.css`を作成します。

```
├─ .vscode/
├─ public/
│  ├─ index.html
│  └─ styles.css
└─ server.js
```

2. 各ファイルを、以下のように編集します。

```
/* public/styles.css */
body {
    background: skyblue;
}
```

```diff
<!-- public/index.html -->
...
<!-- headタグの中にはメタデータ等を記載する -->
<head>
  <meta charset="utf-8">
+   <link rel="stylesheet" href="styles.css">
</head>

<!-- bodyタグの中には実際に表示するものなどを書く -->
...
```

```diff
// server.js
...
// localhostにDenoのHTTPサーバを展開
serve(async (request) => {
+     // パス名を取得する
+     // https://localhost:8000/hoge に接続した場合"/hoge"が取得できる
+     const pathname = new URL(request.url).pathname;
+     console.log(`pathname: ${pathname}`);
+ 
+     // https://localhost:8000/styles.css へのアクセス時、"./public/styles.css"を返す
+     if (pathname === "/styles.css") {
+         const cssText = await Deno.readTextFile("./public/styles.css");
+         return new Response(
+             cssText,
+             {
+                 headers: {
+                     // text/css形式のデータで、文字コードはUTF-8であること
+                     "Content-Type": "text/css; charset=utf-8"
+                 }
+             }
+         );
+     }
+ 
    const htmlText = await Deno.readTextFile("./public/index.html");
    return new Response(
        // Responseの第一引数にレスポンスのbodyを設置
...
```

3. ブラウザを再読み込みして、背景が青くなっていればOKです！

![](./imgs/08_tutorial-read-css-file.png)

### publicフォルダ全体を公開してみよう

ページ数が増えた場合に、返すファイルを一つ一つ指定するのは手間がかかります。  
そこで、`public`以下を静的ファイルサーバーとして公開し、ここに入れたファイルは自動で公開されるようにしてみましょう。

1. `server.js`ファイルを以下の内容で編集します。

```diff
// deno.landに公開されているモジュールをimport
// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";
+ import { serveDir } from "https://deno.land/std@0.194.0/http/file_server.ts";

// localhostにDenoのHTTPサーバを展開
serve(async (request) => {
    // パス名を取得する
    // https://localhost:8000/hoge に接続した場合"/hoge"が取得できる
    const pathname = new URL(request.url).pathname;
    console.log(`pathname: ${pathname}`);

-     // https://localhost:8000/styles.css へのアクセス時、"./public/styles.css"を返す
-     if (pathname === "/styles.css") {
-         const cssText = await Deno.readTextFile("./public/styles.css");
-         return new Response(
-             cssText,
-             {
-                 headers: {
-                     // text/css形式のデータで、文字コードはUTF-8であること
-                     "Content-Type": "text/css; charset=utf-8"
-                 }
-             }
-         );
-     }
- 
-     const htmlText = await Deno.readTextFile("./public/index.html");
-     return new Response(
-         // Responseの第一引数にレスポンスのbodyを設置
-         htmlText,
-         // Responseの第二引数にヘッダ情報等の付加情報を設置
-             // レスポンスにヘッダ情報を付加
-             headers: {
-                 // text/html形式のデータで、文字コードはUTF-8であること
-                 "Content-Type": "text/html; charset=utf-8"
-             }
-     );
+     // ./public以下のファイルを公開
+     return serveDir(
+         request,
+         {
+             /*
+             - fsRoot: 公開するフォルダを指定
+             - urlRoot: フォルダを展開するURLを指定。今回はlocalhost:8000/に直に展開する
+             - enableCors: CORSの設定を付加するか
+             */
+             fsRoot: "./public/",
+             urlRoot: "",
+             enableCors: true,
+         }
+     );

});
```

2. ブラウザを再読み込みして、先程と同じ内容が表示されればOKです！
