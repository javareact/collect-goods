//注入的JS
window.abc = 1;
document.querySelector('body').addEventListener('click', function () {
    console.log('你点击了页面', 6666666666666);
    chrome.runtime.sendMessage({greeting: '你好，我是content-script呀，我主动发消息给后台！'}, function (response) {
        console.log('收到来自后台的回复：' + response);
        document.getElementById('kw').value = response;
    });
});