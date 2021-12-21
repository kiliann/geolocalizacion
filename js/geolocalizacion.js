'Use strict'
/*
@author Kilian Benavente Ortega
 */
class Geolocalizacion{
    constructor() {
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        console.log("iniciando...")
        this.localizacion();
    }
    localizacion(){
        if(window.navigator.geolocation){
            let geolocalizacion = navigator.geolocation;
            geolocalizacion.getCurrentPosition(this.exito)
        }throw 'No tiene GPS'
    }
    exito(posicion){
        console.log(posicion)
        let escribir = document.querySelector('div')
        escribir.innerHTML = 'Altitud '+ posicion.coords.longitude +'<br/> latitud '+ posicion.coords.latitude ;

        console.log(posicion.coords.altitude)
        console.log(posicion.coords.latitude)
    }
}

new Geolocalizacion();