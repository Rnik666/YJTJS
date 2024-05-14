/*发型多多
  @Rnik666
   仅供参考娱乐，禁止贩卖


[rewrite_local] 
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/FXDD.js

[MITM]
hostname = buy.itunes.apple.com
*/
var Rnik = JSON.parse($response.body);
Rnik = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1012168346,
    "receipt_creation_date" : "2099-12-31 23:59:59 Etc/GMT",
    "bundle_id" : "com.ld.sejian",
    "original_purchase_date" : "2099-12-31 23:59:59 Etc/GMT",
    "in_app" : [
      {
        "quantity": "1",
        "purchase_date_ms": "4133750399000", 
        "transaction_id": "987654321098765",       "original_transaction_id": "987654321098765", 
        "product_id": "com.yearMember", 
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "4133750399000", 
        "expires_date": "2099-12-31 23:59:59 Etc/GMT", 
        "expires_date_pst": "2099-12-31 16:59:59 America/Los_Angeles", 
        "is_in_intro_offer_period": "false",
        "is_trial_period": "false"
      }
    ],
    "adam_id" : 1012168346,
    "receipt_creation_date_pst" : "2099-12-31 16:59:59 America/Los_Angeles",
    "request_date" : "2024-05-13 17:13:59 Etc/GMT", 
    "request_date_pst" : "2024-05-13 10:13:59 America/Los_Angeles",
    "version_external_identifier" : 865876831,
    "request_date_ms" : "1715620439975", 
    "original_purchase_date_pst" : "2099-12-31 16:59:59 America/Los_Angeles", 
    "application_version" : "20241000011",
    "original_purchase_date_ms" : "4133750399000", 
    "receipt_creation_date_ms" : "4133750399000", 
    "original_application_version" : "20241000011",
    "download_id" : 503466742368163792
  },
  "status" : 0,
  "environment" : "Production"
}


  
  
  
$done({ body: JSON.stringify(Rnik) });
