/*        
        ➪：全历史

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/playvideo\.qcloud\.com\/getplayinfo|^https?:\/\/speed\.allhistory\.com\/ap url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/QLS.js

[MITM]
hostname = playvideo.qcloud.com, speed.allhistory.com


*/

;let body=$response.body;body=body.replace(/("code"\s*:\s*)\d+/g,'$1200').replace(/("(?:image|userAvatar)"\s*:\s*")[^"]*"/g,'$1http://oss.v2dj.com/pic/2025/07/18/17528094565169.jpeg"').replace(/("userName"\s*:\s*")[^"]*"/g,'$1𝐓𝐆@𝐢𝐎𝐒𝐀𝐖𝐉"').replace(/("level"\s*:\s*)\d+/g,'$19');let modified=false;try{const obj=JSON.parse(body);modified=true;deepUnlockVIP(obj);injectPlayableUrl(obj);body=JSON.stringify(obj)}catch(e){console.log("非JSON响应，跳过对象处理")}$done({body});function deepUnlockVIP(o){if(!o||typeof o!=='object')return;Object.entries(o).forEach(([key,val])=>{if(typeof val!=='object'){switch(true){case/^(isPermanent|hasPrivilege|vip|isVip|enableSubscription|purchase)$/i.test(key):o[key]=true;return;case/^(isFree|showFreeTime)$/i.test(key):o[key]=true;return;case/^(isShowPay|isLadderVipContent|needPay|isLocked|locked|isPaid)$/i.test(key):o[key]=false;return;case/^(expireTime|expired?|expire|end|due|valid)(Time|Date|At)?$/i.test(key):o[key]=4102415999000;return;case/^(level|vipLevel)$/i.test(key):if(key==='level')o[key]=4;return}}if(val&&typeof val==='object'){deepUnlockVIP(val)}})}function injectPlayableUrl(o){if(!o||typeof o!=='object')return;if(o.url===''&&o.streamInfo?.items?.[0]?.url){o.url=o.streamInfo.items[0].url}for(const value of Object.values(o)){if(value&&typeof value==='object'){injectPlayableUrl(value)}}};