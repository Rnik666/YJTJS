/*        
        ➪：爱设计

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/www\.isheji\.com\/newapp\/v1_3_0\/user\/info? url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/ASJ.js

[MITM]
hostname = www.isheji.com


*/

var Rnik = JSON.parse($response.body);
Rnik = {
  "status" : 0,
  "message" : "用户信息",
  "data" : {
    "isj_number" : "F2601623412",
    "invite_code" : "7AZB82W2",
    "last_vip_time" : "2024/06/27 14:13:31",
    "vip_type_desc" : "个人版VIP&商户版VIP",
    "vip_type" : 1,
    "refresh_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjE3NjIzNjgsIlV1SWQiOiJhNGIwZTg0OC0zMzgwLTExZWYtODdjYi0wMDE2M2UzNThlZmIiLCJleHAiOjQ1NTc2MjEzMDgsImlzcyI6IjE1MzM2OTIxNDc2In0.CY541dIPGWNEkoMSfUOe8MQJyzWZA8NHsINQtlT00N0",
    "intro" : "",
    "uuid" : "a4b0e848-3380-11ef-87cb-00163e358efb",
    "vip_detail" : [
      {
        "vip_end_time" : "2099-09-29 23:59:59",
        "vip_type" : 5,
        "id" : 81066,
        "vip_start_time" : "2024-06-26 14:05:38",
        "created_at" : "2024-06-26 14:05:38",
        "is_lifelong" : false,
        "vip_level" : 64,
        "user_id" : 1623412,
        "updated_at" : "2024-06-26 14:05:38"
      },
      {
        "vip_end_time" : "2099-09-29 23:59:59",
        "vip_type" : 4,
        "id" : 81067,
        "vip_start_time" : "2024-06-26 14:13:31",
        "created_at" : "2024-06-26 14:13:31",
        "is_lifelong" : false,
        "vip_level" : 63,
        "user_id" : 1623412,
        "updated_at" : "2024-06-26 14:13:31"
      }
    ],
    "id" : 1623412,
    "is_vip" : 1,
    "is_merchant" : 1,
    "mobile" : "18888888888",
    "personal_vip" : {
      "vip_end_time" : "2099-09-29 到期",
      "vip_name" : "包年VIP（个人版）",
      "vip_show_text" : "个人版有效期至 2099-09-29"
    },
    "day_limit" : "-1",
    "nick_name" : "Rnik666🎖",
    "is_receive_vip" : 0,
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjE3NjIzNjgsIlV1SWQiOiJhNGIwZTg0OC0zMzgwLTExZWYtODdjYi0wMDE2M2UzNThlZmIiLCJleHAiOjE3MjcxNTczMDgsImlzcyI6IjE1MzM2OTIxNDc2In0.xrCq9zmhRRDNFiDSYeY5jWEYcWqiBC-DAdc6q476Z2s",
    "merchant_vip" : {
      "vip_end_time" : "2099-09-29 到期",
      "vip_name" : "包年VIP（商户版）",
      "vip_show_text" : "商户版有效期至 2099-09-29"
    },
    "image_url" : "https://file.isheji.com/isheji/newapp/8117/1623412/20240626135520999703.png"
  }
}

  
  
  
$done({ body: JSON.stringify(Rnik) });
