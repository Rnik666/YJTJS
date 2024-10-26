/*    魔音工坊
      解锁永久会员
     @Rnik666


[rewrite_local]

^https?:\/\/moyin-gateway\.moyin\.com\/moyin-account\/v1\/vip\/status? url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/M1.js
^https?:\/\/moyin-gateway\.moyin\.com\/moyin-account\/v1\/user? url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/M2.js
^https?:\/\/moyin-gateway\.moyin\.com\/tts-web-api url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/M3.js
[mitm] 
hostname = moyin-gateway.moyin.com