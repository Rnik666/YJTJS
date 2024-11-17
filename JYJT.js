/*        
        ➪：戒烟军团

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/smoke\.nxnresearch\.com\/webservice510\.asmx url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/JYJT.js

[MITM]
hostname = smoke.nxnresearch.com


*/

let body = $response.body;

body = body.replace(/("forbid_flg"\s*:\s*)\d+/g, '$11');
body = body.replace(/("member_flg"\s*:\s*)\d+/g, '$11');
body = body.replace(/("expires_in"\s*:\s*)\d+/g, '$14092610661000');

$done({ body });

