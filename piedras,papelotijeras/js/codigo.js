    function aleatorio(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
    
    }
    

    function eleccion(jugada) {
        let resultado = "";
         if (jugada == 1) {
            resultado = "Piedra";
        } else if (jugada == 2) {
            resultado = "Papel";
        } else if (jugada == 3) {
            resultado = "Tijeras";
        } else {
            resultado = "Opción no válida";
        }
        return resultado;
    }

            //1 es piedra, 2 es papel, 3 es tijeras
    let jugador = 0;
    let pc = 0;
    let triunfos = 0;
    let perdidas = 0;
            
    while (triunfos < 3 && perdidas < 3) {
                  pc =  aleatorio(1, 3);
                
                jugador = prompt("Elige una opción:\n1. Piedra\n2. Papel\n3. Tijeras")
                //alert("Jugador: " + jugador);
                
                alert("pc elige: " + eleccion(pc));
                alert("Jugador elige: " + eleccion(jugador));
                
                //COMBATE 
                if (pc == jugador){
                    alert("empate")
                } else if(jugador == 1 && pc==3){
                    alert("GANASTE")
                    triunfos = triunfod + 1;
                } else if(jugador == 2 && pc == 1) {
                    alert("GANASTE" );
                    triunfos = triunfod + 1;
                } else if(jugador==3 && pc==2){
                    alert("GANASTE" );
                    triunfos = triunfod + 1;
                } else {
                    alert("PERDISTE");
                    perdidas = perdidas + 1;
                }
    }

    alert("Ganaste " + triunfos + " veces. perdiste " + perdidas);     
            