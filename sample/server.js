// deno.landに公開されているモジュールをimport
// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

// アクセス数を保持する変数をグローバル領域に定義
let count = 0;

// localhostにDenoのHTTPサーバを展開
serve(request => {
    count++;
    return new Response(`Count: ${count}`);
});