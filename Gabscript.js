/*
AI Gabscript解锁@Rnik666


[rewrite_local] 
^https?:\/\/aigcfive\.laoyinnianhua\.com\/api\/members\/self url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/Gabscript.js

[MITM]
hostname = aigcfive.laoyinnianhua.com
*/
var Rnik = JSON.parse($response.body);
Rnik = {
  "data" : {
    "phone" : "110",
    "vip_renewal_of" : 1,
    "unread" : {
      "message" : 0,
      "feedback" : 0,
      "feedback_payment" : 0
    },
    "nickname" : "Rnik666",
    "vip_expire_time" : 4092610661000,
    "vip_period_type" : 3,
    "vip" : 1,
    "avatar_url" : "https://oss.yhxykj.com/im-prod/2024/05/08/aaf3b5dd36744a359f75ba110780f67c.png",
    "unique_key" : "Rnik666"
  },
  "time" : 1715498107,
  "code" : 200
}

  
  
$done({ body: JSON.stringify(Rnik) });
