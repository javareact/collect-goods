var html = document.body.innerHTML;
chrome.extension.onMessage.addListener(
    function (request, sender, sendMessage) {
        if (request.greeting == "hello") {
            console.log(html);
            sendMessage(html);
        } else {
            sendMessage("FUCK OFF");// snub them.
        }
    });