import "../scss/app.scss";

/* Your JS Code goes here */
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../../node_modules/slick-carousel/slick/slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


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


$(".service-cards").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});