function valueInput() {
  let _email = document.getElementById("email").value;
  let _passWord = document.getElementById("passWord").value;
  let _name = document.getElementById("name").value;
  let _gender = document.getElementById("gender").value;
  let _numberPhone = document.getElementById("phone").value;
  let _confirmPass = document.getElementById("confirmPass").value;
  let valid = true;
  valid =
    emptyTest(_email, "notifyEmail") &
    emptyTest(_passWord, "notifyPassWord") &
    emptyTest(_name, "notifyName") &
    emptyTest(_gender, "notifyGender") &
    emptyTest(_numberPhone, "notifyNumberPhone") &
    emptyTest(_confirmPass, "notifyConfirm");
  valid = checkEmail(_email, "notifyEmail");
  valid = checkPassWord(_passWord, "notifyPassWord");
  valid = checkName(_name, "notifyName");
  valid = checkGender(_gender, "notifyGender");
  valid = checkNumberPhone(_numberPhone, "notifyNumberPhone");
  valid = checkConfirmPass(_confirmPass, "notifyConfirm");
  if (!valid) {
    return;
  }
  let user = new UserName(
    _email,
    _passWord,
    _name,
    _gender,
    _numberPhone,
    _confirmPass
  );
  return user;
}
