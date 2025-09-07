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

let body=$response['\x62\x6f\x64\x79'];body=body['\x72\x65\x70\x6c\x61\x63\x65'](/("\x63\x6f\x64\x65"\s*:\s*)\d+/g,'\x24\x31\x32\x30\x30');body=body['\x72\x65\x70\x6c\x61\x63\x65'](/("\x69\x6d\x61\x67\x65"\s*:\s*"\x29\x5b\x5e"]*"\x2f\x67\x2c\x27\x24\x31\x68\x74\x74\x70\x3a\x2f\x2f\x6f\x73\x73\x2e\x76\x32\x64\x6a\x2e\x63\x6f\x6d\x2f\x70\x69\x63\x2f\x32\x30\x32\x35\x2f\x30\x37\x2f\x31\x38\x2f\x31\x37\x35\x32\x38\x30\x39\x34\x35\x36\x35\x31\x36\x39\x2e\x6a\x70\x65\x67"'\x29\x3b\x62\x6f\x64\x79\x3d\x62\x6f\x64\x79\x2e\x72\x65\x70\x6c\x61\x63\x65\x28\x2f\x28\x22\x75\x73\x65\x72\x41\x76\x61\x74\x61\x72\x22\s\x2a\x3a\s\x2a\x22\x29\x5b\x5e\x22\x5d\x2a\x22\x2f\x67\x2c'$1http://oss.v2dj.com/pic/2025/07/18/17528094565169.jpeg"');body=body.replace(/("userName"\s*:\s*")[^"]*"/g,'$1𝐓𝐆@𝐢𝐎𝐒𝐀𝐖𝐉"');body=body.replace(/("level"\s*:\s*)\d+/g,'$14');body=body.replace(/("isPermanent"\s*:\s*)\w+/g,'$1true');body=body.replace(/("hasPrivilege"\s*:\s*)\w+/g,'$1true');body=body.replace(/("vip"\s*:\s*)\w+/g,'$1true');body=body.replace(/("isFree"\s*:\s*)\w+/g,'$1true');body=body.replace(/("expireTime"\s*:\s*)(null|\d+)/g,'$14092610661000"');try{obj=JSON.parse(body)}catch(e){$done({body});return}deepUnExpire(obj);injectUrl(obj);$done({body:JSON.stringify(obj)});function deepUnExpire(o){if(!o||typeof o!=='object')return;if(Array.isArray(o)){o.forEach(deepUnExpire);return}for(let key in o){if(!Object.prototype.hasOwnProperty.call(o,key))continue;let val=o[key];if(/^(vip|isVip|enableSubscription|hasPrivilege|isPermanent|purchase)$/i.test(key)){o[key]=true;continue}if(/^isFree$/i.test(key)){o[key]=1;continue}if(/^showFreeTime$/i.test(key)){o[key]=true;continue}if(/^isShowPay$/i.test(key)){o[key]=false;continue}if(/^isLadderVipContent$/i.test(key)){o[key]=false;continue}if(/^(expired?|expire|end|due|valid)(Time|Date|At)?$/i.test(key)){o[key]=4102415999000;continue}if(/(free|preview|trial|remaining)(Count|Seconds|Length)?$/i.test(key)){o[key]=0;continue}if(/^(need|is)?(?:paid|pay|charge|locked|cost|price|fee|gold|coin)s?$/i.test(key)){if(/^(needPay|isLocked|locked|isPaid)$/i.test(key)){o[key]=false}else{o[key]=typeof val==='number'?0:''}continue}if(key==='content'&&typeof val==='string'&&val.includes('-webkit-line-clamp')){o[key]=val.replace(/-webkit-line-clamp:\s*\d+;/g,'');continue}if(val&&typeof val==='object'){deepUnExpire(val)}}}function injectUrl(o){if(!o||typeof o!=='object')return;if(Array.isArray(o)){o.forEach(injectUrl);return}if(Object.prototype.hasOwnProperty.call(o,'url')&&o.url===''&&o.streamInfo&&Array.isArray(o.streamInfo.items)&&o.streamInfo.items[0]&&typeof o.streamInfo.items[0].url==='string'){o.url=o.streamInfo.items[0].url}for(let k in o){let v=o[k];if(v&&typeof v==='object')injectUrl(v)}}$done({body:JSON.stringify(obj)});$done({body});