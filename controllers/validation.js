function emptyTest(checkInput, idInfo) {
  // check xem input đó có được nhập dữ liệu vào hay không nếu không có thì báo lỗi và trả về một kết quả false , nếu có trả về true
  if (checkInput) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML = "***please this input inside";
    return false;
  }
}

function checkEmail(checkInput, idInfo) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(checkInput)) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML = "***please input form email";
    return false;
  }
}

function checkPassWord(checkInput, idInfo) {
  var regexPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  if (regexPass.test(checkInput)) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML =
      "***please you must input notice above";
  }
}
function checkName(checkInput, idInfo) {
  var regexNumber = /^[a-z0-9]+$/i;
  if (!regexNumber.test(checkInput)) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML = "Please you only input letter";
  }
}

function checkGender(checkInput, idInfo) {
  if (checkInput == "Male" || checkInput == "Female") {
    document.getElementById(idInfo).innerHTML = "";
  } else {
    document.getElementById(idInfo).innerHTML =
      "***Please you only choose 2 option";
  }
}

function checkNumberPhone(checkInput, idInfo) {
  if (checkInput.match(/\d/g).length === 10) {
    document.getElementById(idInfo).innerHTML = "";
    // return true;
  } else {
    document.getElementById(idInfo).innerHTML =
      "***please only input 10 number";
  }
}

function checkConfirmPass(checkInput, idInfo) {
  let passWord = document.getElementById("passWord").value;
  if (checkInput == passWord) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML =
      "confirm input not matching with passWord";
    return false;
  }
}
