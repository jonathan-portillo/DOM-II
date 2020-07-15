const stockImg = document.querySelectorAll("img");
const headOne = document.querySelector("h2");
const bottones = document.querySelectorAll(".btn");
const head = document.querySelector("title");
const para = document.querySelector("p");

//1
stockImg[0].addEventListener("dblclick", () => {
  stockImg[0].src =
    "https://cdn.motor1.com/images/mgl/kJmLY/s1/tata-ultra-urban-9-9-electric-ac-bus.jpg";
});
//2
stockImg[1].addEventListener("mouseover", () => {
  stockImg[1].style.transform = "scale(2)";
  stockImg[1].style.transition = "all 0.4s";
});
//3
stockImg[1].addEventListener("mouseleave", () => {
  stockImg[1].style.transform = "scale(1)";
});
//4
headOne.addEventListener("click", () => {
  headOne.textContent = "Party Bus time!!";
  headOne.style.fontWeight = "bold";
  headOne.style.fontSize = "10rem";
  headOne.style.color = "goldenrod";
});

//5
window.addEventListener("scroll", () => {
  head.textContent = "Welcome to the Party!!";
  // console.log("work");
});

//6
window.addEventListener("resize", () => {
  para.style.color = "blue";
  console.log("work2");
});

//7
window.addEventListener("keydown", () => {
  bottones[0].textContent = "Secret Code Hiding";
});

//8
bottones[1].addEventListener("mousedown", () => {
  bottones[1].textContent = "On the right track";
});

//9
bottones[1].addEventListener("mouseup", () => {
  bottones[1].textContent = "Konami Code Hidden";
});

//10
bottones[2].addEventListener("mouseout", () => {
  head.textContent = " up, up, down, down, left, right, left, right, B, A";
});

//stopPropogation and preventDefault
const breakLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < breakLink.length; i++) {
  breakLink[i].addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
}
