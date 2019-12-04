//注入的JS
$(document).on("click", ".btn-goods-detail", function () {
    var fetchurl = document.getElementById("fetchurl").value;
    if (!fetchurl) {
        console.log("url不能为空");
    }
    chrome.runtime.sendMessage(
        {
            action: 'fetchUrl',
            url: fetchurl
        }
        , function (response) {
            if (response.code == 1) {
                if (typeof response.result == 'string') {
                    document.getElementById("goodshtml").value = response.result;
                } else {
                    document.getElementById("goodshtml").value = JSON.stringify(response.result);
                }
            } else {
                console.log(response.result);
            }
        });
});