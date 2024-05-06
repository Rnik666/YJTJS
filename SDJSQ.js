
*******************************
[rewrite_local]
^http[s]?:\/\/api.ztvbox.com\/saidun\/version2\/v2_detail url script-response-body ztvbox.js
[mitm] 
hostname = api.ztvbox.com

*******************************/

var body = $response.body.replace(/"rightsTimes":\d+/g,'"rightsTimes":4787111230')
$done({ body });