/***********************************

自用API类型

合集

***********************************/


























[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/Rnik666/666/refs/heads/main/api1.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/Rnik666/666/refs/heads/main/api2.j
[mitm]
hostname=api.revenuecat.com

