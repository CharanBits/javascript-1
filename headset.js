const bigImg = document.querySelector("#bigImg");
const smallImgs = document.querySelectorAll("img");
const menu = document.querySelector(".fa-bars");
const navlist = document.querySelector(".navlist");

smallImgs.forEach((img) => {
    img.addEventListener("click", () => {
        bigImg.src = img.src;
    });
});


menu.addEventListener("click",()=>{
  navlist.classList.toggle("active");
  menu.classList.toggle("fa-xmark");
})

