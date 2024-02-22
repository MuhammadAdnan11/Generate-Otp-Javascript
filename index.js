function Generate() {
  var digits = "0123456789";
  var otp = "";
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  var span = document.querySelector(".box span");
  span.innerHTML = otp;
}
