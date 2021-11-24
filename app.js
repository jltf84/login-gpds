


function validacion(username,pass) {
 
 var usuario = "admin";
 var password = "123456";

  username = document.getElementById("usuario");
  pass = document.getElementById("pass");
  //var y= location.href="home.html"

  if (username.value == usuario && pass.value == password) {
    alert("contaseña correcta");
    return  window.location.href='home.html'
  } else {
    alert("contraseña o nombre de usuario invalida");
  }
}













