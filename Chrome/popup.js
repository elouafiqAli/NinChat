

function hide(e) {
    chrome.tabs.executeScript(null, {file: "background.js" }, function () {
        window.close();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('activate').addEventListener('click', hide);
});