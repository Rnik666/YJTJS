/*
AI Gabscript解锁@Rnik666


[rewrite_local] 
^https?:\/\/aigcfive\.laoyinnianhua\.com\/api\/members\/self url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/Gabscript.js

[MITM]
hostname = aigcfive.laoyinnianhua.com
*/
var Rnik = JSON.parse($response.body);
   
    Rnik.data.phone = "Rnik666";
    Rnik.data.nickname = "Rnik666";
    Rnik.data.vip_renewal_of = 1;
    Rnik.data.vip_expire_time = 4092610661000;
    Rnik.data.Vip = 1;
    Rnik.data.vip_period_type = 3;
    Rnik.data.avatar_url = "https://oss.yhxykj.com/im-prod/2024/05/08/aaf3b5dd36744a359f75ba110780f67c.png";
   Rnik.data.unique_key = "Rnik666";
  $done({body : JSON.stringify(Rnik)});
