/*
旅行订单生成@Rnik666


[rewrite_local] 
^https?:\/\/ticket-api\.aimusician\.com\.cn\/user\/info\/getMyMaterial url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/LXDDSC.js
[MITM]
hostname = ticket-api.aimusician.com.cn
*/
var%20Rnik%20=%20JSON.parse($response.body);%0ARnik%20=%20%7B%0A%20%20%22timeStamp%22%20:%201715870396316,%0A%20%20%22errorCode%22%20:%20200,%0A%20%20%22data%22%20:%20%7B%0A%20%20%20%20%22nickname%22%20:%20%22Rnik666%22,%0A%20%20%20%20%22userCode%22%20:%2030002327,%0A%20%20%20%20%22userVipInfo%22%20:%20%7B%0A%20%20%20%20%20%20%22level%22%20:%201,%0A%20%20%20%20%20%20%22title%22%20:%20%22%E8%88%AA%E8%A1%8C%E6%97%A0%E5%BF%A7%22,%0A%20%20%20%20%20%20%22expireTime%22%20:%204092610661000%0A%20%20%20%20%7D,%0A%20%20%20%20%22avatar%22%20:%20%22https://draw-file.aimelodist.cc/ai-draw/works/10163275/10249663/0.jpg%22%0A%20%20%7D,%0A%20%20%22traceId%22%20:%20%22TSN20240516179111637719095296035295%22,%0A%20%20%22errorMessage%22%20:%20%22%E6%93%8D%E4%BD%9C%E6%88%90%E5%8A%9F%22%0A%7D%0A%0A%0A%20%20%0A%20%20%0A%20%20%0A$done(%7B%20body:%20JSON.stringify(Rnik)%20%7D);%0A