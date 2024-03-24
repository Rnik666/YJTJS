[rewrite_local]
# > 万能变声器 vip 
^https?:\/\/www.40sishi.com\/voice\/user\/profile url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/wnbsq.js

[mitm] 
hostname = www.40sishi.com
*
*
*/




var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.vipState.state = 1;
obj.data.vipState.forever = true;
obj.data.name = "https://t.me/GieGie777";
$done({body: JSON.stringify(obj)});