/*        
        ➪：应用程序锁

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/YYCXS.js

[MITM]
hostname = buy.itunes.apple.com


*/
var DG = JSON.parse($response.body);
DG = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1592938462,
    "receipt_creation_date" : "2025-04-19 04:39:43 Etc/GMT",
    "bundle_id" : "com.netcool.iconlock",
    "original_purchase_date" : "2025-04-19 04:37:53 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1694250549000",
        "expires_date" : "2099-09-09 09:09:09 Etc/GMT",
        "is_in_intro_offer_period" : "false",
        "expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
        "transaction_id" : "490001314520000",
        "is_trial_period" : "false",
        "original_transaction_id" : "490001314520000",
        "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
        "product_id" : "com.netcool.iconlock.yearly",
        "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1694250550000",
        "web_order_line_item_id" : "490000123456789",
        "expires_date_ms" : "4092599349000",
        "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
        "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
      }
    ],
    "adam_id" : 1592938462,
    "receipt_creation_date_pst" : "2025-04-18 21:39:43 America/Los_Angeles",
    "request_date" : "2025-04-19 05:06:33 Etc/GMT",
    "request_date_pst" : "2025-04-18 22:06:33 America/Los_Angeles",
    "version_external_identifier" : 846865549,
    "request_date_ms" : "1745039193226",
    "original_purchase_date_pst" : "2025-04-18 21:37:53 America/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1745037473000",
    "receipt_creation_date_ms" : "1745037583000",
    "original_application_version" : "1",
    "download_id" : 504430712882366800
  },
  "environment" : "Production",
  "status" : 0,
  "latest_receipt" : "ddm1023",
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1694250549000",
      "expires_date" : "2099-09-09 09:09:09 Etc/GMT",
      "is_in_intro_offer_period" : "false",
      "expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
      "transaction_id" : "490001314520000",
      "is_trial_period" : "false",
      "original_transaction_id" : "490001314520000",
      "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
      "product_id" : "com.netcool.iconlock.yearly",
      "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1694250550000",
      "web_order_line_item_id" : "490000123456789",
      "expires_date_ms" : "4092599349000",
      "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
      "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
    }
  ],
  "pending_renewal_info" : [
    {
      "product_id" : "com.netcool.iconlock.yearly",
      "original_transaction_id" : "490001314520000",
      "auto_renew_product_id" : "com.netcool.iconlock.yearly",
      "auto_renew_status" : "1"
    }
  ]
}

  
  
  
$done({ body: JSON.stringify(DG) });
