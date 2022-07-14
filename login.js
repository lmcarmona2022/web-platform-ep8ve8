function Login(form) {
  username = new Array("admin");
  password = new Array("test");
  if (form.username.value == username[0] && form.password.value == password[0]) {
  location.href='/';
  return false;
  }
  else {
  alert("Usuario ó Contraseña incorrecto \n Pruebe nuevamente");
  form.username.focus();
  }
  return true;
  }