/*

[rewrite_local]
^https?:\/\/leancloud.emotionwp.com\/.*\/classes\/wpf_account url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/BZ.js

[mitm] 
hostname = leancloud.emotionwp.com


*/

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.results[0].isSVIP = 1 ;
obj.results[0].isVIP = 1 ;
obj.results[0].vipEndTime = 32493852612 ;
obj.results[0].svipEndTime = 32493852612 ;
obj.results[0].coin = 999880 ;
obj.results[0].nickName = "Rnik666" ;
$done({body: JSON.stringify(obj)});
