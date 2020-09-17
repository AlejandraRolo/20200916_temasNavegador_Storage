const contenedor = document.getElementById('container')
let getlocalStorageTema = localStorage.getItem("classTema")

const dark = document.getElementById('dark')
const light = document.getElementById('light')
const yellow = document.getElementById('yellow')
const olive = document.getElementById('olive')

if(getlocalStorageTema != null){
    contenedor.classList.add(getlocalStorageTema)
}

dark.addEventListener('click', ()=>{
    cambiarTema('dark')
})

light.addEventListener('click', ()=>{
    cambiarTema('light')
})

yellow.addEventListener('click', ()=>{
    cambiarTema('yellow')
})

olive.addEventListener('click', ()=>{
    cambiarTema('olive')
})

/*
function cambiarTema(valorClase){
    // remover todas las clases de temas
    contenedor.setAttribute("class", "container")
    contenedor.classList.add(valorClase)

    // almacenar en localStorage tema dark
    localStorage.setItem("classTema", valorClase);
}
*/

const cambiarTema= (valorClase)=>{
     // remover todas las clases de temas
     // Opcion1
     //contenedor.className = "container " + valorClase

     // Opcion2
     contenedor.setAttribute("class", "container")
     contenedor.classList.add(valorClase)

     // almacenar en localStorage el tema seleccionado
     localStorage.setItem("classTema", valorClase);
}