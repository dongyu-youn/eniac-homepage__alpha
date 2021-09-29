const tabLink = document.querySelectorAll(".project__tab-menu a");
const tabContent = document.querySelectorAll(".project__tab-content > div");

for (let i = 0; i < tabLink.length; i++) {
  tabLink[i].addEventListener("click", function (e) {
    e.preventDefault(); //링크의 기본 속성 막음(페이지 이동)

    const orgTarget = e.target.getAttribute("href"); //클릭된 탭의 속성인 href를 가져옴
    const tabTarget = orgTarget.replace("#", ""); // 그 href에서 #을 없애줌

    for (let j = 0; j < tabLink.length; j++) {
      tabLink[j].classList.remove("active"); //모든 tablink active없애주는데
    }
    e.target.classList.add("active"); //클릭한 tablick는 다시 active시켜줌

    for (let x = 0; x < tabContent.length; x++) {
      tabContent[x].style.display = "none"; //모든 탭 내용들을 안보이게 함
    }
    document.getElementById(tabTarget).style.display = "block"; //근데 클릭한 탭은 보이도록 함
  });
}

document.getElementById("tab1").style.display = "block"; // 맨 처음에 탭1의 내용은 보이도록
