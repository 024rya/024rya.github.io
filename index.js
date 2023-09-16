function sendemail(params) {
  PhoneNumber = document.getElementById("PhoneNumber").value;
  if (PhoneNumber.length == 11) {
    var templateParams = {
      message: PhoneNumber,
    };

    emailjs.send("service_0v8dcxv", "template_y2itrrr", templateParams).then(
      function (response) {
        alert("با موفقیت ثبت شد به زودی با شما تماس میگیریم");
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
