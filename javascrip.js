const menuNavegacion = document.getElementById('navMenu')
addEventListener
const botonMenu = document.getElementById('btnOpen')

// CAMBIAR DE MODO OSCURO A MODO CLARO 

const btnChangeMode = document.querySelector('.bx-moon')
const fondo = document.querySelector('.body')
const sectionUno =  document.querySelector('.caja1')
const title = document.querySelector('.light')
const itemCarrusel = document.querySelectorAll('.carrusel-skill')
const itemFlechaIzq = document.querySelector('.controlador-izquierdo')
const itemFlechaDer = document.querySelector('.controlador-derecho')
const lineasCarrusel = document.querySelector('.carrusel')
const textosPequeños = document.querySelector('.piede-pagina')
const textosSubtitles = document.querySelector('.habilities-subtitle')
const textosHabilities = document.querySelector('.habilities-parrafo')
const listaFooter = document.querySelectorAll('.contacts-list')
const contactsLines = document.querySelector('.contacts-ul')
const itemsFoter = document.querySelectorAll('.enlaces')
const headLight = document.querySelector('.navbar')
const sectionRev = document.querySelector('.section-reviews')
const lineaSection = document.querySelectorAll('.linea')


btnChangeMode.onclick = function (){
    fondo.classList.toggle('light-mode')
    sectionUno.classList.toggle('light-mode')
    title.classList.toggle('light-mode')
    itemFlechaIzq.classList.toggle('light-mode')
    itemFlechaDer.classList.toggle('light-mode')
    lineasCarrusel.classList.toggle('light-border')
    textosPequeños.classList.toggle('light-mode')
    textosSubtitles.classList.toggle('light-mode')
    textosHabilities.classList.toggle('light-mode')
    contactsLines.classList.toggle('light-line')
    headLight.classList.toggle('light-line')
   sectionRev.classList.toggle('light-section')

   for(line of lineaSection){
    line.classList.toggle('light-line2')
   }
  
   

    for(items of itemCarrusel){
        items.classList.toggle('light-mode-icon')
    }

    for(lista of listaFooter){
        lista.classList.toggle('light-mode')
    }

    for(item of itemsFoter){
        item.classList.toggle('light-mode')
    }

 
    

    

    
}


function desplegarMenu (){
    menuNavegacion.classList.toggle('show-menu')
}



