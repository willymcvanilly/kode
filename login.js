function signup() {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var passW = document.getElementById("password").value;

  var user = {
    email: email,
    username: username,
    password: passW,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log("user added");
}

function loginFunc(e) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var passW = document.getElementById("password").value;
  //var result = document.getElementById("result").value;

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    //result.innerHTML = "Forkert brugernavn";
  } else if (username == data.username && passW == data.password) {
    //result.innerHTML = "login godkendt";
    alert("Tak for at logge ind. Du vil nu blive dirigeret tilbage til hjemmesiden");
    window.location.href = "design.html";
  } else {
    //result.innerHTML = "Forkert kodeord";
  }
}

