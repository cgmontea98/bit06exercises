//Botón iniciar sesión
const $btn1 = document.getElementById("button1");

$btn1.addEventListener("click", () => {
  let $form1 = document.getElementById("is");
  let mo = $form1.style.display;

  if (mo === "none") {
    $form1.style.display = "block";
    $btn1.innerHTML = "Ocultar";
  } else {
    $form1.style.display = "none";
    $btn1.innerHTML = "Iniciar sesión";
  }
});

//Botón registro
const $btn2 = document.getElementById("button2");

$btn2.addEventListener("click", () => {
  let $form2 = document.getElementById("rg");
  let dis = $form2.style.display;
console.log(dis)
  if (dis === "none") {
    $form2.style.display = "block";
    $btn2.innerHTML = "Ocultar";
  } else {
    $form2.style.display = "none";
    $btn2.innerHTML = "Registro";
  }
});
