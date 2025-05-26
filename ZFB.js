/*        
        ➪：支付宝

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/ltapi\.huantukj\.com\/v1\/refreshToken url reject
^https?:\/\/ltapi\.huantukj\.com\/ url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/ZFB.js

[MITM]
hostname = ltapi.huantukj.com


*/
let body = $response.body;
body = body.replace(/("isVip"\s*:\s*)\d+/g, '$11');
body = body.replace(/("code"\s*:\s*)\d+/g, '$1200');
body = body.replace(/("msg"\s*:\s*")[^"]*"/g, '$1 success"');
body = body.replace(/("tokenExpireTime"\s*:\s*)\d+/g, '$111296000');
body = body.replace(/("refreshTokenExpireTime"\s*:\s*)\d+/g, '$160480000');
$done({ body });
