function sendemail(params) {
  PhoneNumber = document.getElementById("PhoneNumber").value;
  if (PhoneNumber.length == 11) {
    var templateParams = {
      message: PhoneNumber,
    };

    emailjs.send("service_0v8dcxv", "template_y2itrrr", templateParams).then(
      function (response) {
        document.getElementById("PhoneNumbererror").innerHTML =
          "با موفقیت ثبت شد به زودی با شما تماس میگیریم";
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("FAILED");
        console.log("FAILED...", error);
      }
    );
  } else {
    console.log(PhoneNumber);
    document.getElementById("PhoneNumbererror").innerHTML =
      "شماره تلفن وارد شده صحیح نمی باشد";
  }
}

const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});