const imgUpload = document.querySelector("#input-file");
const imgBox = document.querySelector(".img-upload-box");

imgUpload.addEventListener("change", () => {
  imgBox.style.display = "none";
});
