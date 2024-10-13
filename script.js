var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//class active
const navUl = document.querySelector("nav ul");
document.querySelector("#hamburger-menu").onclick = () => {
  navUl.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navUl.contains(e.target)) {
    navUl.classList.remove("active");
  }
}); 
