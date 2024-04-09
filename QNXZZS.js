/*

[rewrite_local]
^https?:\/\/mapi\.mbtools\.work\/chatapp-dev\/classes\/_User\/9LcwGZpCLL url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/QNXZZS.js
hostname = mapi.mbtools.work

*/
var Rink= JSON.parse($response.body);
Rink= {
  "iap_no" : "com.allinone.aiwritemasterrobot11",
  "invite_count" : 0,
  "free_use" : 3,
  "iap" : {
    "__type" : "Pointer",
    "className" : "iap_info",
    "objectId" : "g9WR4OT5F9"
  },
  "City" : "Shanghai",
  "store" : "",
  "last_ip" : "101.82.182.100",
  "createdAt" : "2024-04-09T12:29:40.123Z",
  "ACL" : {
    "9LcwGZpCLL" : {
      "write" : true,
      "read" : true
    }
  },
  "iap_date" : "2099-09-09 20:04",
  "regist_code" : "YW9HBC",
  "updatedAt" : "2024-04-09T12:42:09.278Z",
  "platform" : "iOS",
  "Country" : "CN",
  "objectId" : "9LcwGZpCLL",
  "email" : "ed6428ecc29f7b9cb09781e29e8ca8bc@example.com",
  "vip_time_stamp" : 1712925662,
  "iap_contiu" : 1,
  "invite_ask_count" : 0,
  "sessionToken" : "r:b2c1baf77ace0e8522bbf4d71f1f6843",
  "username" : "ed6428ecc29f7b9cb09781e29e8ca8bc"
}

}
$done({ body: JSON.stringify(Rink) });
