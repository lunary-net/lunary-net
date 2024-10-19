// Function to get browser info
function getBrowserInfo() {
    var userAgent = navigator.userAgent;
    var browser = "Unknown";

    if (userAgent.indexOf("Chrome") > -1) {
        browser = "Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        browser = "Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        browser = "Safari";
    } else if (userAgent.indexOf("MSIE") > -1 || !!document.documentMode == true) {
        browser = "Internet Explorer";
    }

    console.log(`You are using ${browser}`);
}

getBrowserInfo();
