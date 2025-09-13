/*        
        ➪：银行

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]

^http:\/\/47\.242\.203\.207\/api\/auth\/verify$ method POST url script-request-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/JSYH.js


*/

// JSYH.js（终极版：自动适配请求体格式）
if ($request.method === 'POST') {
  try {
    const contentType = $request.headers['Content-Type'] || $request.headers['content-type'];
    
    // 1. 处理JSON格式请求体（最常见）
    if (contentType?.includes('application/json')) {
      const body = JSON.parse($request.body);
      body.udid = "jh_Model: iPhone, Localized Model: iPhone, Device ID: 88888";
      body.code = "YIfzpxunAIia";
      $done({ body: JSON.stringify(body) });
    } 
    // 2. 处理表单格式请求体（如x-www-form-urlencoded）
    else if (contentType?.includes('application/x-www-form-urlencoded')) {
      const formData = new URLSearchParams($request.body);
      formData.set('udid', "jh_Model: iPhone, Localized Model: iPhone, Device ID: 88888");
      formData.set('code', "YIfzpxunAIia");
      $done({ body: formData.toString() });
    } 
    // 3. 处理其他格式（如form-data，暂不支持）
    else {
      console.warn("不支持的请求体格式:", contentType);
      $done({ body: $request.body });
    }
  } catch (e) {
    console.error("脚本执行错误:", e.message);
    $done({ body: $request.body });
  }
} else {
  $done({ body: $request.body });
}