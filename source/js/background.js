// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (typeof request.action == "undefined") {
        sendResponse({
            code: 0,
            result: '不支持此操作'
        });
        return;
    }
    switch (request.action) {
        case "fetchUrl":
            if (typeof request.url == "undefined") {
                sendResponse({
                    code: 0,
                    result: '缺少参数'
                });
                return;
            }
            $.ajaxSettings.async = false;//同步发送请求
            $.get(request.url, function (data, status) {
                if (status == 'success') {
                    sendResponse({
                        code: 1,
                        result: data
                    });
                    return;
                } else {
                    sendResponse({
                        code: 0,
                        result: status
                    });
                    return;
                }
            });
            break;
        default:
            sendResponse({
                code: 0,
                result: '不支持此操作'
            });
            return;
    }
});