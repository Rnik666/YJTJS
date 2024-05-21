/*山丘阅读
@Rnik666

[rewrite_local] 
^https?:\/\/108\.181\.40\.58:88\/api\/v2\/myinfo\/8? url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/SQYD.js

[MITM]
hostname = 108.181.40.58:88

*/
var Rnik = JSON.parse($response.body);
Rnik = {
  "status" : "1",
  "data" : [
    {
      "uuid" : "8acfdb4d8",
      "banned" : "0",
      "headimgurl" : null,
      "type" : "1",
      "wxunionid" : null,
      "token" : "f34c09c1",
      "vipto" : "2099-05-21 23:59:17",
      "wxopenid" : null,
      "nickname" : null,
      "email" : null,
      "appleid" : null,
      "device" : null
    }
  ],
  "seconds" : 0.002
}

  
  
  
$done({ body: JSON.stringify(Rnik) });
