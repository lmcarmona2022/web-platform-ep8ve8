function Login(form) {
  username = new Array("admin");
  password = new Array("test");
 // if (document.getElementsByClassNametElementsByClassName('login__input')==username[0] )  {
  if (form.username.value == username[0] && form.password.value == password[0]) {
  location.href='/';
  return false;
  }
  else {
  alert(document.getElementsByClassName('login__input').value+"Usuario ó Contraseña incorrecto \n Pruebe nuevamente");
  form.username.focus();
  }
  return true;
  }