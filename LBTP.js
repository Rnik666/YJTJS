/*
乐播投屏@Rnik666

[rewrite_local] 
 ^https?:\/\/saas\.hpplay\.cn\/api\/lebo-member\/app\/member\/relation\/rights? url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/LBTP.js

[MITM]
hostname = saas.hpplay.cn
  
*/
var Rnik = JSON.parse($response.body);
Rnik = {
  "code": 200,
  "success": true,
  "data": {
    "memberType": "8",
    "memberTypeId": "8",
    "memberTypeName": "高级会员",
    "memberTypeLevel": 8,
    "icon": "",
    "sceneFlag": "",
    "memberIdentity": "1",
    "isExpire": 0,
    "expire": "2099-09-09",
    "systemTime": "4780558458",
    "autoRenewFlag": "1",
    "rights": [
      {
        "rightsCode": "cast_space",
        "rightsName": "投屏空间",
        "limitParams": [
          {
            "limitParamCode": "single_duration_min",
            "limitParamName": "单次时长[分钟]",
            "limitParamVal": 30000000
          }
        ]
      },
      {
        "rightsCode": "super_connect",
        "rightsName": "超级连接",
        "limitParams": [
          {
            "limitParamCode": "daily_frequency",
            "limitParamName": "单日次数",
            "limitParamVal": 99999999
          }
        ]
      },
      {
        "rightsCode": "office_meeting",
        "rightsName": "办公开会",
        "limitParams": [
          {
            "limitParamCode": "single_duration_min",
            "limitParamName": "单次时长[分钟]",
            "limitParamVal": 30000000
          }
        ]
      },
      {
        "rightsCode": "cloud_mirror",
        "rightsName": "云镜像",
        "limitParams": [
          {
            "limitParamCode": "single_duration_min",
            "limitParamName": "单次时长[分钟]",
            "limitParamVal": 5000000
          }
        ]
      },
      {
        "rightsCode": "lan_mirror",
        "rightsName": "局域网镜像",
        "limitParams": [
          {
            "limitParamCode": "single_duration_min",
            "limitParamName": "单次时长[分钟]",
            "limitParamVal": 6000000
          }
        ]
      }
    ],
    "vip": true,
    "vipLastExpire": "47858465243000"
  },
  "msg": "操作成功"
}
  
  
  
  
$done({ body: JSON.stringify(Rnik) });
