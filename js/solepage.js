function openCloseToc() {
    if (document.getElementById("toc-content").style.display === "block") {
        document.getElementById("toc-content").style.display = "none";
        
        document.getElementById("header_Title").style.display = "block";
    } else {
        document.getElementById("toc-content").style.display = "block";
        
        document.getElementById("header_Title").style.display = "none";
    }
}