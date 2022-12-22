/* Camino 1
const $btn1 = document.getElementById("button1");
let $form1 = document.getElementById("is");
let st1 = $form1.style.display;
$btn1.addEventListener("click", blockI);

const $btn2 = document.getElementById("button2");
let $form2 = document.getElementById("rg");
let st2 = $form2.style.display;
$btn2.addEventListener("click", blockR);

function blockI() {
  if ($btn1.click) {
    $form1.style.display = "block";
    $btn1.innerHTML = "Ocultar";
    console.log($btn1.innerHTML);
  }
}

function blockR() {
  if ($btn2.click) {
    $form2.style.display = "block";
    $btn2.innerHTML = "Ocultar";
    
  }
} 
*/

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

  if (dis === "none") {
    $form2.style.display = "block";
    $btn2.innerHTML = "Ocultar";
  } else {
    $form2.style.display = "none";
    $btn2.innerHTML = "Registro";
  }
});
