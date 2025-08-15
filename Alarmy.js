/*        
        ➪：𝐀𝐥𝐚𝐫𝐦𝐲

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/ars\.alar\.my\/api\/v2\/user\/sync url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/Alarmy.js

[MITM]
hostname = ars.alar.my


*/
;let obj=JSON.parse($response.body);obj.subscription=[{"originalTransactionID":"","productID":"droom.sleepIfUCanFree.premium.yearly01.4","willAutoRenew":true,"isActive":true,"expiresDateMs":4092610661000,"periodType":"TRIAL","latestPurchaseDateMs":1651590191000,"originalPurchaseDateMs":1651590191000}],$done({body:JSON.stringify(obj)});;