function openIntroToc(){
    if(document.getElementById("introduce_toc_Content").style.display === "none"){
        document.getElementById("award_toc_Content").style.display = "none";
        document.getElementById("gift_toc_Content").style.display = "none";
        document.getElementById("introduce_toc_Content").style.display === "block";
    }
}

function openAwardToc(){
    if(document.getElementById("award_toc_Content").style.display === "none"){
        document.getElementById("introduce_toc_Content").style.display = "none";
        document.getElementById("gift_toc_Content").style.display = "none";
        document.getElementById("award_toc_Content").style.display === "block";
    }
}

function openGiftToc(){
    if(document.getElementById("gift_toc_Content").style.display === "none"){
        document.getElementById("introduce_toc_Content").style.display = "none";
        document.getElementById("award_toc_Content").style.display = "none";
        document.getElementById("gift_toc_Content").style.display === "block";
    }
}