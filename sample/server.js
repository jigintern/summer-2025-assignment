// deno.landに公開されているモジュールをimport
// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

// localhostにDenoのHTTPサーバを展開
serve(async (request) => {
    // パス名を取得する
    // https://localhost:8000/hoge に接続した場合"/hoge"が取得できる
    const pathname = new URL(request.url).pathname;
    console.log(`pathname: ${pathname}`);
    
    // https://localhost:8000/styles.css へのアクセス時、"./public/styles.css"を返す
    if (pathname === "/styles.css") {
        const cssText = await Deno.readTextFile("./public/styles.css");
        return new Response(
            cssText,
            {
                headers: {
                    // text/css形式のデータで、文字コードはUTF-8であること
                    "Content-Type": "text/css; charset=utf-8"
                }
            }
        );
    }
    
    const htmlText = await Deno.readTextFile("./public/index.html");
    return new Response(
        // Responseの第一引数にレスポンスのbodyを設置
        htmlText,
        // Responseの第二引数にヘッダ情報等の付加情報を設置
        {
            // レスポンスにヘッダ情報を付加
            headers: {
                // text/html形式のデータで、文字コードはUTF-8であること
                "Content-Type": "text/html; charset=utf-8"
            }
        }
    );
});