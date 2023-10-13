import { checkEmailValid } from "./helpers/checkEmailValid.js";

document.addEventListener("DOMContentLoaded", function () {
  // try {



    const inputsEmail = document.querySelectorAll("input[type=email]");

    inputsEmail.forEach((inputEmail) => {
      
      inputEmail.addEventListener("input", function (e) {
        console.log('e.target.value')
        console.log(e.target.value)
        if (!checkEmailValid(e.target.value)) e.target.classList.add("_error");
        else e.target.classList.remove("_error");
      });
      
    });



  // } catch (err) {
  //   console.error("TRY-CATCH ERROR: ", err);
  // } finally {
  // }
});
