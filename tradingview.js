/*        
        ➪：tradingview

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/cn\.tradingview\.com\/api\/v1\/user\/profile\/me\/ url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/tradingview.js

[MITM]
hostname = cn.tradingview.com


*/

var body = $response.body;
var url = $request.url;

var obj = JSON.parse(body);
//未开通试用
if (url.includes('/api/v1/user/profile/me/')) {
    obj.pro_plan = "pro_premium";
    obj.plan = {
        "billing_cycle": "y",
        "subscription_id": "190001834305521",
        "merchant": "apple",
        "platform_product_id": "com.tradingview.pro.premium.yearly",
        "next_billing_cycle": "y",
        "pro_plan_expire_on": 9705594522,
        "is_lite_plan": true,
        "is_trial_available": false,
        "next_pro_plan": "pro_premium",
        "pro_plan": "pro_premium",
        "is_renewal_active": true
    };
    obj.badges = [
        {
            "name": "pro:pro_premium",
            "verbose_name": "Premium"
        }
    ];
    obj.username = "Rnik666🎖";
 //开通试用或者会员未到期 恢复购买入口
} else if (url.includes('/order/apple/receipt/')) {
    obj.platform_product_id = "com.tradingview.pro.premium.yearly";
    obj.subscription_id = "290001834305521";
    obj.billing_cycle = "y";
    obj.merchant = "apple";
    obj.next_billing_cycle = "y";
    obj.pro_plan_expire_on = 9705594522;
    obj.is_trial_available = false;
    obj.next_pro_plan = "pro_premium";
    obj.pro_plan = "pro_premium";
    obj.status = "ok";
}

body = JSON.stringify(obj);
$done({ body, url });
