/*
[rewrite_local] 
^https?:\/\/api\.faceplayplus\.com\/users\/account url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/FacePlay.js

[MITM]
hostname = api.faceplayplus.com

*/
var Rnik = JSON.parse($response.body);

    Rnik.data.vipExpired = 4092610661000;
    Rnik.data.isAllLifeVip= 1;
    Rnik.data.vipPassDate = 4092610661000;
    Rnik.data.isVip = 1;
    Rnik.data.hasBuyGoldCoin = true;
    Rnik.data.balance = 99999999;
  $done({body : JSON.stringify(Rnik)});