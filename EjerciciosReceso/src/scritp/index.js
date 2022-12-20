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
  }
}

function blockR() {
  if ($btn2.click) {
    $form2.style.display = "block";
    $btn2.innerHTML = "Ocultar";
    let oc = $btn2.innerHTML;
  }
}
oc.addEventListener('click', esconder);

/*  const $btn1 = document.getElementById('button1');

$btn1.addEventListener('click', () =>{
    let $form1 = document.getElementById('is');
    let mo = $form1.style.display;

    if(mo === 'none'){
        $form1.style.display = 'block';
    }else{
        $form1.style.display = 'none';
    }
}) */
