let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'none'

    let bontonMascotaJugador = document.getElementById('boton-mascota')
    bontonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let btnFuego = document.getElementById('btnFuego')
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('btnAgua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('btnTierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let btnReiniciar = document.getElementById('btn-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego)


}


function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'   

   

    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipego')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota_jugador')

        if (inputHipodoge.checked) {
            spanMascotaJugador.innerHTML = 'Hipodoge'
        } else if (inputCapipepo.checked) {
            spanMascotaJugador.innerHTML = 'Capipego'
        } else if (inputRatigueya.checked) {
            spanMascotaJugador.innerHTML = 'Ratigueya'
        } else {
            alert('Selecciona una mascota')
        }
        
        seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota_enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipego'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo () {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    
    combate ()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas_jugador')
    let spanVidasEnemigo = document.getElementById('vidas_enemigo')

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("empate")
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("GANASTE" );
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje("GANASTE" );
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE");
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicidades, ganaste el juego")
    } else if (vidasJugador == 0) {
       crearMensajeFinal("Lo siento, perdiste el juego")    

    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
   
    let nuevoAtaqueJugador = document.createElement ('p')
    let nuevoAtaqueEnemigo = document.createElement ('p')
    
    sectionMensajes.innerHTML =  resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let btnFuego = document.getElementById('btnFuego')
    btnFuego.disabled = true
    let btnAgua = document.getElementById('btnAgua')
    btnAgua.disabled = true
    let btnTierra = document.getElementById('btnTierra')
    btnTierra.disabled = true

    let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}
    
function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    
}

window.addEventListener('load', iniciarJuego)