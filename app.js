


function validacion() {
 
 var usuario = "admin";
 var password = "123456";

  var username = document.getElementById("usuario");
  var pass = document.getElementById("pass");
  var y= location.href="home.html"

  if (username.value == usuario && pass.value == password) {
    alert("contaseña correcta");
    return y;
  } else {
    alert("contraseña o nombre de usuario invalida");
  }
}













