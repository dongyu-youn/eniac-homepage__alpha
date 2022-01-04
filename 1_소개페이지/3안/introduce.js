function openCloseToc() {
    if (document.getElementById("toc-content").style.display === "block") {
        document.getElementById("toc-content").style.display = "none";
        document.getElementById("toc-toggle").innerHTML =
            '<i class="fas fa-angle-up"></i>';
        document.getElementById("header_Title").style.display = "block";
    } else {
        document.getElementById("toc-content").style.display = "block";
        document.getElementById("toc-toggle").innerHTML =
            '<i class="fas fa-angle-down" style="color:black"></i>';
        document.getElementById("header_Title").style.display = "none";
    }
}