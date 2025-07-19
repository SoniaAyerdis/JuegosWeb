const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('Reiniciar')
const bontonMascotaJugador = document.getElementById('boton-mascota')
const btnReiniciar = document.getElementById('btn-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota_jugador')

const spanMascotaEnemigo = document.getElementById('mascota_enemigo')

const spanVidasJugador = document.getElementById('vidas_jugador')
const spanVidasEnemigo = document.getElementById('vidas_enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = [] 
let ataqueMokeponEnemigo
let ataqueEnemigo =[]
let ataqueJugador
let opcionDeMokepones
let inputHipodoge  
let inputCapipepo  
let inputRatigueya
let inputPydos
let inputTucapalma
let inputLangostelvis
let mascotaJugador 
let ataquesMokepon
let btnFuego  
let btnAgua  
let btnTierra  
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let ataqueJugadorA = []
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let mokeponJugadorObjeto
let intervalo
let mapaBackground = new Image()
mapaBackground.src = 'asset/mokemap.png'
let alturaQueBuscamos 
let anchoDelMapa = window.innerWidth - 20
const maxAnchoDelMapa = 450

if (anchoDelMapa > maxAnchoDelMapa) {
    anchoDelMapa = maxAnchoDelMapa - 20
 }

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida, id = null ) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    
    }
}

let hipodoge = new Mokepon('Hipodoge', 'asset/mokepon_hipodoge_attack.png', 5)
let capipego = new Mokepon('Capipego', 'asset/mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', 'asset/mokepon_ratigueya_attack.png', 5)
let pydos = new Mokepon ('Pydo', 'asset/mokepon_pydos_attack.png', 5)
let tucapalma = new Mokepon ( 'tucapalma', 'asset/mokepon_tucapalma_attack.png', 5)
let langostelvis = new Mokepon ('Langostelvis', 'asset/mokepon_langostelvis_attack.png', 5)


mokepones.push(hipodoge, capipego, ratigueya, pydos, tucapalma, langostelvis)

const hipodogeAtaques =[
    { nombre: '💧', id: 'btnAgua' },
    { nombre: '💧', id: 'btnAgua' },
    { nombre: '💧', id: 'btnAgua' },
    { nombre: '🔥', id: 'btnFuego' },
    { nombre: '🌱', id: 'btnTierra' }
]
hipodoge.ataques.push(...hipodogeAtaques)
langostelvis.ataques.push(...hipodogeAtaques)


const capipegoAtaques = [
     { nombre: '🌱', id: 'btnTierra' },
    { nombre: '🌱', id: 'btnTierra' },
    { nombre: '🌱', id: 'btnTierra' },
    { nombre: '💧', id: 'btnAgua' },
    { nombre: '🔥', id: 'btnFuego' }
]

pydos.ataques.push(...capipegoAtaques)
capipego.ataques.push(capipegoAtaques)

const ratigueyaAtaques = [
    { nombre: '🔥', id: 'btnFuego' },
    { nombre: '🔥', id: 'btnFuego' },
    { nombre: '🔥', id: 'btnFuego' },
    { nombre: '💧', id: 'btnAgua' },
    { nombre: '🌱', id: 'btnTierra' }
]

ratigueya.ataques.push(...ratigueyaAtaques)
tucapalma.ataques.push(...ratigueyaAtaques)


function iniciarJuego() { 

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.nombre} class="tarjeta-mokepon">
                <label class="tarjetaMokepon" for=${mokepon.nombre}>
                    <p>${mokepon.nombre}</p>
                    <img src= ${mokepon.foto} alt=${mokepon.nombre}>
          </img>      </label>
        `
        
  contenedorTarjetas.innerHTML += opcionDeMokepones

         inputHipodoge = document.getElementById('Hipodoge')
         inputCapipepo = document.getElementById('Capipego')
         inputRatigueya = document.getElementById('Ratigueya')
         inputPydos = document.getElementById('Pydo')
         inputTucapalma = document.getElementById('tucapalma')
         inputLangostelvis = document.getElementById('Langostelvis')

    })

    //contenedorTarjetas.innerHTML += opcionDeMokepones
       //  inputHipodoge = document.getElementById('Hipodoge')
        // inputCapipepo = document.getElementById('Capipego')
        // inputRatigueya = document.getElementById('Ratigueya')

   // sectionReiniciar.style.display = 'none'

    bontonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    btnReiniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
    .then( function (res){
        //console.log(res)
        if(res.ok){
            res.text()
                .then(function (respuesta){
                console.log(respuesta)
                jugadorId = respuesta
            })
        }
    })
}



function seleccionarMascotaJugador() { 
    const radios = document.querySelectorAll('input[name="mascota"]')
    let seleccionado = false

        radios.forEach((radio) => {
            if (radio.checked) {
                spanMascotaJugador.innerHTML = radio.id
                mascotaJugador = radio.id
                seleccionado = true
            }
        })

        if (!seleccionado) {
            alert('Selecciona una mascota')
            return
        }

        sectionSeleccionarMascota.style.display = 'none' 
        seleccionarMokepon(mascotaJugador)

        mokeponJugadorObjeto = mokepones.find(mokepon => mokepon.nombre === mascotaJugador)
     
        extraerAtaques(mascotaJugador)
        
        sectionVerMapa.style.display = 'flex'
        iniciarMapa()
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    });
}




function extraerAtaques (mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
          
        }  
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
            <button id=${ataque.id} class="btnAtaque BAtaques">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    btnFuego = document.getElementById('btnFuego')
    btnAgua = document.getElementById('btnAgua')
    btnTierra = document.getElementById('btnTierra')
    botones = document.querySelectorAll('.BAtaques')

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugadorA.push('Fuego')
                console.log(ataqueJugadorA)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                 ataqueJugadorA.push('Agua')
                console.log(ataqueJugadorA)
                boton.style.background = '#112f58'
                boton.disabled = true 
            } else {
                ataqueJugadorA.push('Tierra')
                console.log(ataqueJugadorA)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            if (ataqueJugadorA.length === 5) {
                enviarAtaques ()
            }
             
        })
    })
}

function enviarAtaques () {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugadorA
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)

}

function obtenerAtaques(){
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
        .then (function (res) {
           if ( res.ok) {
            res.json()
                .then(function ({ ataques }) {
                    if(ataques.length === 5) {
                        ataqueEnemigo = ataques
                        iniciarPelea()
                    }
                })
           }
        })
}


function seleccionarMascotaEnemigo(enemigo) {

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataqueMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo () {
    console.log('Ataques enemigo', ataqueMokeponEnemigo)
    let ataqueAleatorio = aleatorio(ataqueMokeponEnemigo.length - 1, 0)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('Fuego')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('Agua')
    } else {
        ataqueEnemigo.push('Tierra')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugadorA.length === 5 && ataqueEnemigo.length === 5) {
        combate()
    } 
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugadorA[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugadorA.length; index++) {
        if (ataqueJugadorA[index] == ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("empate")
        } else if (ataqueJugadorA[index] == 'Fuego' && ataqueEnemigo[index] == 'Tierra') {
            indexAmbosOponentes(index, index)
            crearMensaje("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugadorA[index] == 'Agua' && ataqueEnemigo[index] == 'Fuego') {
            indexAmbosOponentes(index, index)
            crearMensaje("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugadorA[index] == 'Tierra' && ataqueEnemigo[index] == 'Agua') {
            indexAmbosOponentes(index, index)
            crearMensaje("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("Perdiste")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }

    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate")
    } else if (victoriasJugador > victoriasEnemigo) {
       crearMensajeFinal("Felicidades, ganaste el juego")    
    } else {
        crearMensajeFinal("Lo siento, perdiste el juego")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement ('p')
    let nuevoAtaqueEnemigo = document.createElement ('p')
    
    let mensaje = document.createElement('p')

    mensaje.innerHTML = resultado
    sectionMensajes.appendChild(mensaje)
    //sectionMensajes.innerHTML =  resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal  

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}
    
function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    
}

function pintarCanvas () {
    mokeponJugadorObjeto.x = mokeponJugadorObjeto.x + mokeponJugadorObjeto.velocidadX
    mokeponJugadorObjeto.y = mokeponJugadorObjeto.y + mokeponJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0, 
        0,
        mapa.width,
        mapa.height
    )
    mokeponJugadorObjeto.pintarMokepon()

    enviarPosicion(mokeponJugadorObjeto.x, mokeponJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon()
        revisarColicion(mokepon)
    })
        
}

function enviarPosicion(x,y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
    method: "post",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify({
        x,
        y
    })

    })
    .then(function(res) {
       if (res.ok) {
        res.json()
            .then(function ({ enemigos }) {
                console.log(enemigos)
                mokeponesEnemigos = enemigos.map(function (enemigo) {

                     if (!enemigo.mokepon) {
                    // Si no hay mokepon definido, devuelve null o ignora
                    return null;
                     }

                    let mokeponEnemigo = null
                    const mokeponNombre = enemigo.mokepon.nombre || ""
                    if (mokeponNombre === 'Pydo') {
                        mokeponEnemigo = new Mokepon ('Pydo', 'asset/mokepon_pydos_attack.png', 5, enemigo.id )
                    } else if ( mokeponNombre === 'tucapalma'){
                        mokeponEnemigo = new Mokepon ( 'tucapalma', 'asset/mokepon_tucapalma_attack.png', 5 , enemigo.id)
                    } else if (mokeponNombre === 'Langostelvis' ){
                        mokeponEnemigo = new Mokepon ('Langostelvis', 'asset/mokepon_langostelvis_attack.png', 5 , enemigo.id )
                    } else if ( mokeponNombre === 'Hipodoge') {
                        mokeponEnemigo = new Mokepon('Hipodoge', 'asset/mokepon_hipodoge_attack.png', 5, enemigo.id)
                    } else if ( mokeponNombre === 'Capipego' ){
                        mokeponEnemigo = new Mokepon('Capipego', 'asset/mokepon_capipepo_attack.png', 5, enemigo.id)
                    } else if (mokeponNombre === 'Ratigueya'){
                        mokeponEnemigo = new Mokepon('Ratigueya', 'asset/mokepon_ratigueya_attack.png', 5, enemigo.id)
                    }

                     if (mokeponEnemigo) {
                    mokeponEnemigo.x = enemigo.x
                    mokeponEnemigo.y = enemigo.y
                    return mokeponEnemigo
                     } else {
        
                     return null
                     }
                }).filter(Boolean)
            })
       } 
    })



}

function moverDerecha() {
    mokeponJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    mokeponJugadorObjeto.velocidadX = -5
}
function moverAbajo() {
    mokeponJugadorObjeto.velocidadY = 5
}
function moverArriba() {
    mokeponJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    mokeponJugadorObjeto.velocidadX = 0
    mokeponJugadorObjeto.velocidadY = 0
}

function sePresionaUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {

    mokeponJugadorObjeto = obtenerObjetoMokepon(mascotaJugador)
    console.log(mokeponJugadorObjeto, mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener('keydown',sePresionaUnaTecla )
    window.addEventListener('keyup',detenerMovimiento )  

}

function obtenerObjetoMokepon (/*mascotaJugador*/){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
          
        }  
    }
}

function revisarColicion (enemigo){
    const arribaMascotan = enemigo.y
    const abajoMascotan = enemigo.y + enemigo.alto
    const derechaMascotan = enemigo.x + enemigo.ancho   
    const izquierdaMascotan = enemigo.x

    const arribaEnemigo = mokeponJugadorObjeto.y
    const abajoEnemigo = mokeponJugadorObjeto.y + mokeponJugadorObjeto.alto
    const derechaEnemigo = mokeponJugadorObjeto.x + mokeponJugadorObjeto.ancho
    const izquierdaEnemigo = mokeponJugadorObjeto.x


    if (
        abajoMascotan< arribaEnemigo ||
        arribaMascotan > abajoEnemigo ||   
        derechaMascotan < izquierdaEnemigo ||   
        izquierdaMascotan > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)

}

window.addEventListener('load', iniciarJuego)