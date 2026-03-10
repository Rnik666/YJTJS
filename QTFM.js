/*
[rewrite_local]
^https?://(user|app|entry).qtfm.cn/(m-bff|api|u2/api)/(v1|v5)/(channel_verify|personal/?carrier|user).*$ url script-response-body https://gist.githubusercontent.com/Yu9191/551ff361d59fb0ab8f6d34da5bd1e1e0/raw/qtfm.js
^https?://app.qtfm.cn/m-bff/v1/audiostreams url script-request-header https://gist.githubusercontent.com/Yu9191/551ff361d59fb0ab8f6d34da5bd1e1e0/raw/qtfm.js
^https://ad\.qtfm\.cn/api/ url reject
^https://ip\.qtfm\.cn/ip url reject
^https://adlaunch\.qtfm\.cn/launch url reject
^https://woqt2\.qtfm\.cn/v2/userConfig url reject

[mitm]
hostname = app.qtfm.cn, user.qtfm.cn, recpage-c.qtfm.cn, entry.qtfm.cn, ad.qtfm.cn, ip.qtfm.cn, adlaunch.qtfm.cn, woqt2.qtfm.cn
*/

if ($request.url.indexOf("/m-bff/v1/audiostreams") != -1) {
var headers = $request.headers;

headers["qt-device-id"] = "6a2ccaf7b71bba75665b48d5d7f28a14";
headers["QT-Device-Id"] = "6a2ccaf7b71bba75665b48d5d7f28a14";

headers["qt-user-id"] = "b862d402a68046709ca71b33f9439195";
headers["QT-User-Id"] = "b862d402a68046709ca71b33f9439195";

headers["qt-access-token"] = "790876f7030c4fda9d062286ed5ba6e0";
headers["QT-Access-Token"] = "790876f7030c4fda9d062286ed5ba6e0";

headers["cookie"] = "HWWAFSESID=05fd1a6a9b1c89f212; HWWAFSESTIME=1773109433023";
headers["Cookie"] = "HWWAFSESID=05fd1a6a9b1c89f212; HWWAFSESTIME=1773109433023";

headers["user-agent"] = "QingTing-iOS/11.0.2.12 com.Qting.QTTour Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148";
headers["User-Agent"] = "QingTing-iOS/11.0.2.12 com.Qting.QTTour Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148";

$done({ headers: headers });
}
else if ($request.url.indexOf("/api/v1/personal/") != -1 || $request.url.indexOf("/api/v5/personal/") != -1) {
var body = JSON.parse($response.body);

body.data.membership.multi_hook[0].title = "2999-09-09到期";
body.data.membership.btn_desc = "❤️作者";
body.data.membership.multi_hook[0].subtitle = "作者11";
body.data.membership.url = "";

body.data.account.jdd.number = 999880;
body.data.account.qtcoin.number = 999880;

delete body.data.level_info;
delete body.data.discovery.entries;

$done({ body: JSON.stringify(body) });
}
else if ($request.url.indexOf("/channel_verify/") != -1) {
var body = JSON.parse($response.body);

body.data.user_relevance = {};
body.data.user_relevance.autobuy = false;
body.data.user_relevance.sale_status = "paid";

$done({ body: JSON.stringify(body) });
}
else if ($request.url.indexOf("/user") != -1) {
var body = JSON.parse($response.body);

if (body.data && body.data.membership) {
body.data.membership.multi_hook = body.data.membership.multi_hook || [{}];
body.data.membership.multi_hook[0].title = "2999-09-09到期";
}

$done({ body: JSON.stringify(body) });
}
else {
$done({});
}