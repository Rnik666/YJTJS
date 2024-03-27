

/*

[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.+\/(user\/getvipinfo|User\/getWXPW) url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/WZPP.js

[mitm]
hostname = bzpp2.iwzbz.com


var Rnik = JSON.parse($response.body);

Rnik.isSuccess = true;
Rnik.validateKey = "Rnik666 ";
Rnik.data = {
    "expires" : "9999-09-09 09:09:09",
    "vipLevel" : 3
  };

$done({body : JSON.stringify(Rnik)});