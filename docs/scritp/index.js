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
  console.log(dis);
  if (dis === "none") {
    $form2.style.display = "block";
    $btn2.innerHTML = "Ocultar";
  } else {
    $form2.style.display = "none";
    $btn2.innerHTML = "Registro";
  }
});

//Función de inicio de sesión

const form = document.getElementById("formIS");



const is = {
  Email: "bit",
  Password: 2023,
  Check: true,
};

form.exampleInputEmail1.addEventListener("input", (e) => {
  is.Email = e.target.value;
  
});

form.exampleInputPassword1.addEventListener("input", (e) => {
  is.Password = e.target.value;
  
});

form.exampleCheck1.addEventListener("change", (e) => {
  is.Check = e.target.cheked;
  
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (
    form.exampleInputEmail1 && 
    form.exampleInputPassword1 && 
    form.exampleCheck1 
  ) {
    window.Location.href = "bit06exercises/docs/exer.html";
    
  } else {
    alert("acceso denegado");
  }
});
