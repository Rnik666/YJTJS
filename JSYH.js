   



[rewrite_local]
# 修改验证请求的请求体 (使用远程脚本)
^http:\/\/47\.242\.203\.207\/api\/auth\/verify$ url script-request-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/JSYH.js

[MITM]
hostname = 47.242.203.207




// auth-verify.js
   if ($request.method === 'POST') {
     try {
       let body = JSON.parse($request.body);
       
       // 替换目标字段
       body.udid = "jh_Model: iPhone, Localized Model: iPhone, Device ID: 91511F99-BE21-4CD5-8561-34E1845806AB";
       body.code = "YIfzpxunAIia";
       
       // 返回修改后的请求体
       $done({ body: JSON.stringify(body) });
     } catch (e) {
       console.log("JSON解析错误: " + e);
       $done({});
     }
   } else {
     $done({});
   }