function showContent(tabNumber) {
    var contents = document.getElementsByClassName("content");
    var tabs = document.getElementsByClassName("tab");
    console.info(contents, tabNumber);
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
        tabs[i].classList.remove("active");
    }
    var tabId = "tab" + tabNumber;
    document.getElementById(tabId).classList.add("active");

    var contentId = "content" + tabNumber;
    document.getElementById(contentId).classList.add("active");
}

function downloadApk() {

    const link = document.createElement("a");
    link.href = "https://invite.clubcow1.com/?code=LW5O81Z"; // Replace with your actual file path or URL
    link.download = "cowgame"; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


document.getElementById("currentYear").textContent = new Date().getFullYear();
