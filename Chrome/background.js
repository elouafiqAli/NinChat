var FBContentBody = "content";
var FBHeader = "pagelet_bluebar";
var FBFooter = "pageFooter";

function createIframe(url) {
    if (url.indexOf("http") == -1) {
        url = 'http://' + url;
    }

    frame = "<iframe src='{{id}}' "
                + "width='100%'"
                + "height='100%'"
                + "style='border:0'>"
            + "</iframe>";

    frame = frame.replace(/{{id}}/, url);

    return frame;
}

function remove(id) {
    return ( elem = document.getElementById(id)).parentNode.removeChild(elem);
}

// removing header and footer
remove(FBHeader);
remove(FBFooter);

// inserting iFrame
content = document.getElementById(FBContentBody);
content.innerHTML = createIframe("bbc.co.uk");

// styling and making it look awesome
content.parentNode.style.width = "100%";
content.parentNode.style.height = "100%";

document.getElementsByTagName('body')[0].style.overflowY = 'hidden'



console.log(content);