import "../scss/app.scss";

/* Your JS Code goes here */
import $ from "jquery";
import "font-awesome/css/font-awesome.min.css";
import gsap from "gsap/dist/gsap";
import "bootstrap/dist/js/bootstrap.bundle";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import Swal from "../../../node_modules/sweetalert2";
const sendOrderBtn = document.querySelector("#send-order");
sendOrderBtn.addEventListener("click", popupSendOrder);

function popupSendOrder() {
  Swal.fire({
    icon: "info",
    title: "انتقادات و پیشنهادات شما",
    confirmButtonText: "ارسال",
    showCloseButton: true,
    html:
      '<input id="swal-input1" placeholder="نام و نام خانوادگی*" class="swal2-input">' +
      '<input id="swal-input2" placeholder="example@gmail.com" class="swal2-input">' +
      '<input id="swal-input2" placeholder="توضیحات" class="swal2-input">',
  });
}
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("load", headerAnimation);
const navbarItem = document.querySelectorAll(".nav-item");
const insuranceItemsBox = document.querySelectorAll(
  ".category-insurance__items-box"
);

function headerAnimation() {
  const TL = gsap.timeline();
  TL
    .from(
      navbarItem,
      {
        autoAlpha: 0,
        stagger: 0.2,
      },
      "-=.5"
    )
    .from(insuranceItemsBox, {
      autoAlpha: 0,
      y: -70,
      duration: 1,
      stagger: 0.2,
    });
}




 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) => {
   if (!menu.classList.contains("active")) {
     return;
   }
   if (e.target.closest(".menu-item-has-children")) {
     const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click", () => {
   hideSubMenu();
 });
 menuTrigger.addEventListener("click", () => {
   toggleMenu();
 });
 closeMenu.addEventListener("click", () => {
   toggleMenu();
 });
 document.querySelector(".menu-overlay").addEventListener("click", () => {
   toggleMenu();
 });
 function toggleMenu() {
   menu.classList.toggle("active");
   document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren) {
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle =
     hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML = menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function hideSubMenu() {
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() => {
     subMenu.classList.remove("active");
   }, 300);
   menu.querySelector(".current-menu-title").innerHTML = "";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
 }

 window.onresize = function () {
   if (this.innerWidth > 991) {
     if (menu.classList.contains("active")) {
       toggleMenu();
     }
   }
 };

