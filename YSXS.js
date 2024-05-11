*/宜搜小说@Rnik666

[rewrite_local] 
^https?:\/\/api\.ieasou\.com\/api\/bookapp\/balance\.m? url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/YSXS.js

[MITM]
hostname = api.ieasou.com
/*
var Rnik = JSON.parse($response.body);
Rnik = {
 "success" : true,
  "freeInfo" : {
    "expired" : true,
    "freePrivilege" : false,
    "uid" : 1101268392,
    "expireTime" : 0
  },
  "svipInfo" : {
    "svipDes" : "开通超级会员，全场免费读",
    "tryMoney" : 0,
    "svip" : false,
    "uid" : 0,
    "expireTime" : 0
  },
  "userAvatarForbid" : 0,
  "errorlog" : "",
  "abnormityUid" : 0,
  "readTimeToday" : 0,
  "balance" : 0,
  "vipInfo" : {
    "vipStatus" : 1,
    "vip" : true,
    "uid" : 1101268392,
    "autoTime" : 4092610661000,
    "expireTime" : 4092610661000
  },
  "loginType" : 1,
  "bookcaseAdCnt" : 0,
  "couponValue" : 0,
  "medalCnt" : {
    "notLightCnt" : 1,
    "total" : 1
  },
  "level" : 1,
  "expNum" : 0,
  "today_readTime" : 0,
  "adCount" : 0,
  "ebean" : 0,
  "hasGift" : false,
  "extChargeAdCnt" : 0,
  "myPosition" : "18|1800|1800|书券",
  "valiDisCnt" : 0,
  "couponCount" : 0,
  "charge" : false,
  "credit" : 0,
  "adStatus" : {
    "userdScore" : 0,
    "ctime" : 0,
    "begin" : 0,
    "end" : 0,
    "uid" : 0,
    "contents" : null,
    "remainingTime" : 0,
    "daysNum" : 0,
    "comment" : null
  }
}

  
  
$done({ body: JSON.stringify(Rnik) });
