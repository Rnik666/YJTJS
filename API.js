/***********************************

【自用ID填充】

***********************************/





















































[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/Rnik666/666/refs/heads/main/api1.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/Rnik666/666/refs/heads/main/api2.js
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Rnik666/666/refs/heads/main/buy.js
[mitm]
hostname=api.revenuecat.com,buy.itunes.apple.com


