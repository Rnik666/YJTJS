[rewrite_local]

^https?:\/\/app-ios\.y2002\.com\/api\/v2\/User\/Info? url script-request-header https://raw.githubusercontent.com/Rnik666/666/main/Y1.js
^https?:\/\/app-ios\.y2002\.com\/API\/V2\/Processer\.ashx? url script-request-header https://raw.githubusercontent.com/Rnik666/666/main/Y2.js

[mitm] 
hostname = app-ios.y2002.com