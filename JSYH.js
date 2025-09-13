/*        
        ➪：银行

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^http:\/\/47\.242\.203\.207\/api\/auth\/verify$ method POST url script-request-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/JSYH.js

[MITM]
hostname = 47.242.203.207



*/

if ($request.method === 'POST') {
    try {
        // 打印原始请求体
        console.log("原始请求体: " + $request.body);
        let body = JSON.parse($request.body);
        
        // 替换目标字段
        body.udid = "jh_Model: iPhone, Localized Model: iPhone, Device ID: 88888";
        body.code = "88888";
        
        let newBody = JSON.stringify(body);
        // 打印修改后的请求体
        console.log("修改后的请求体: " + newBody);
        
        // 返回修改后的请求体
        $done({ body: newBody });
    } catch (e) {
        console.log("JSON解析错误: " + e);
        $done({});
    }
} else {
    $done({});
}