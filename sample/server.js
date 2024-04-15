// deno.landに公開されているモジュールをimport
// denoではURLを直に記載してimportできます
import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

// localhostにDenoのHTTPサーバを展開
serve(request => {
    return new Response("Hello Deno!");
});