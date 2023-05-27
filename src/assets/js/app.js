import "../scss/app.scss";

/* Your JS Code goes here */

import "bootstrap/dist/js/bootstrap.bundle";

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
