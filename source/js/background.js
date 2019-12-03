chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    chrome.tabs.sendMessage(tabId, {greeting: "hello"}, function (response) {
        // console.log(response, 222222222222222);　　// 向content-script.js发送请求信息
        // loadXMLDoc('https://m.baidu.com');
        $.get("https://item.m.jd.com/product/7651951.html", function (data, status) {
            console.log("Data: " + data + "nStatus: " + status, 333333);
        });
    });
});

function loadXMLDoc(url) {
    xmlhttp = new XMLHttpRequest();
    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = state_Change;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    } else {
        console.log("Your browser does not support XMLHTTP.");
    }
}

function state_Change() {
    if (xmlhttp.readyState == 4) {// 4 = "loaded"
        if (xmlhttp.status == 200) {// 200 = "OK"
            console.log(xmlhttp.responseText);
        } else {
            console.log("Problem retrieving data:" + xmlhttp.statusText);
        }
    }
}