// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('收到来自content-script的消息：');
    console.log(request, sender, sendResponse);
    $.ajaxSettings.async = false;//同步发送请求
    $.get("https://item.jd.com/62496752295.html", function (data, status) {
        console.log(data);
        sendResponse(data);
    });
});