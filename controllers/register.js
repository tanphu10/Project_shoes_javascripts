function addUser() {
  let user = new UserName();
  user.email = document.getElementById("email").value;
  user.passWord = document.getElementById("passWord").value;
  user.name = document.getElementById("name").value;
  user.gender = document.getElementById("gender").value;
  user.numberphone = document.getElementById("phone").value;
  user.confirmPass = document.getElementById("confirmPass").value;
  let userMember = valueInput();

  console.log(user);
  // gọi API để thêm người dùng vào
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    responseType: "json",
    //
    data: {
      email: `${user.email}`,
      password: "string",
      name:`${user.name}`,
      gender: true,
      phone: `${user.numberPhone}`,
    },
  });
  promise.then(function (res) {
    console.log(res);
    var arrUser = res.data.content;
    var content = "";

    content = `
             <tr>
                <td>${arrUser.email}</td>
                <td>${arrUser.passWord}</td>
                <td>${arrUser.name}</td>
                <td>${arrUser.gender}</td>
                <td>${arrUser.numberPhone}</td>
             </tr>
             `;

    document.getElementById("tbodyUser").innerHTML = content;
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
