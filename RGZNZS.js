*/
[rewrite_local] 
^https?:\/\/nichousha\.sjrjyffs\.top\/api\/app\/user\/getCurrentInfo url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/RGZNZS.js

[MITM]
hostname = nichousha.sjrjyffs.top
/*
var Rnik = JSON.parse($response.body);
Rnik = {
  "msg" : "ok",
  "data" : {
    "vipStatus" : "1",
    "id" : "1789165595442978817",
    "vipLabel" : "3",
    "nickname" : "Rnik666",
    "imgNum" : 999999999,
    "avatar" : "https://oss.yhxykj.com/im-prod/2024/03/04/a5320a934dd44f50a422a5411eb7ed88.png"
  },
  "code" : 200
}

  
  
$done({ body: JSON.stringify(Rnik) });
