const dark = document.getElementById('dark')
const light = document.getElementById('light')
const yellow = document.getElementById('yellow')
const olive = document.getElementById('olive')

if(localStorage.getItem("classTema") != null){

    let tema = localStorage.getItem("classTema")
    document.getElementById('container').classList.add(tema)
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

function cambiarTema(valorClase){
    // remover todas las clases de temas
    document.getElementById('container').setAttribute("class", "container")
    document.getElementById('container').classList.add(valorClase)

    // almacenar en localStorage tema dark
    localStorage.setItem("classTema", valorClase);
}