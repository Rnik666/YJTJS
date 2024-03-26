
[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.+\/(user\/getvipinfo|User\/getWXPW) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wenzhenpaipan.js

[mitm]
hostname = bzpp2.iwzbz.com


var Rnik = JSON.parse($response.body);

chxm1023.isSuccess = true;
chxm1023.validateKey = "chxm1023";
chxm1023.data = {
    "expires" : "9999-09-09 09:09:09",
    "vipLevel" : 3
  };

$done({body : JSON.stringify(Rnik)});