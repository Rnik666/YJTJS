/*        
        ➪：XSVPN

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/XSVPN.js

[MITM]
hostname = api.revenuecat.com


*/

var DG = JSON.parse($response.body);
DG = {
  "request_date" : "2024-11-22T05:33:14Z",
  "request_date_ms" : 1732253594131,
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-11-22T04:58:46Z",
    "original_application_version" : null,
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.ddgksf2013.premium.yearly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "normal",
        "expires_date" : "2099-12-18T01:04:17Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-09-08T01:04:18Z",
        "purchase_date" : "2022-09-08T01:04:17Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "expires_date" : "2099-12-18T01:04:17Z",
        "purchase_date" : "2022-09-08T01:04:17Z",
        "product_identifier" : "com.ddgksf2013.premium.yearly",
        "grace_period_expires_date" : null
      }
    },
    "original_purchase_date" : null,
    "original_app_user_id" : "$RCAnonymousID:0ffe07ceacf041a9b2548cce376fa5c9",
    "last_seen" : "2024-11-22T05:32:15Z"
  },
  "Attention" : "无偿分享，禁止售卖"
}

  
  
  
$done({ body: JSON.stringify(DG) });
