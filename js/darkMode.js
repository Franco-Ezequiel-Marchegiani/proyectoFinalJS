// *** DARK MODE ***
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', function(e){
    e.preventDefault();
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})
// Modificación fotos Historia
//Creación de variables con un valor inicial (para saber si está el modo oscuro o no)
let fotoMostrada = "logoDark";
let fotoQueen = "queenColor";
let fotoFreddie = "freddieColor";
let fotoBrian = "brianColor";
let fotoJohn = "johnColor";
let fotoRoger = "rogerColor";
let fotoQueenArg = "queenArgColor"
let fotoMostradaFooter = "logoFooterDark"
//Se accede al buton del HTML desde el evento "onClick" nombrando a la siguiente función: 
function funcionDarkMode(){
    //Acá define las variables con el elemento del HTML (utilizando DOM)
    let logoQueen = document.getElementById("logoQueen");
    let imagenQueen = document.getElementById("queen");
    let imagenFreddie = document.getElementById("freddieMercury");
    let imagenBrian = document.getElementById("brianMay");
    let imagenJohn = document.getElementById("johnDeacon");
    let imagenRoger = document.getElementById("rogerTaylor");
    let imagenQueenArg = document.getElementById("queenArgentina");
    let logoQueenFooter = document.getElementById("icono__footer")
    //Condicional foto Logo
    //Cambio a foto a color
    if(fotoMostrada == "logoDark"){
        logoQueen.src = "./Imagenes/logo_icon.png";
        fotoMostrada = "logoColor";
    } else{ //Vuelve el ícono a blanco y negro
        logoQueen.src = "./Imagenes/logo.png";
        fotoMostrada = "logoDark";
    }
    //Cambio foto logo Footer
    if(fotoMostradaFooter == "logoFooterDark"){
        logoQueenFooter.src = "./Imagenes/logo_icon.png";
        fotoMostradaFooter = "logoFooterColor"
    } else{
        logoQueenFooter.src = "./Imagenes/logo.png";
        fotoMostradaFooter = "logoFooterDark"
    }
    //Condicional foto Queen
    //Mantiene foto a color
    if(fotoQueen == "queenColor"){
        imagenQueen.src = "./Imagenes/darkmode/queen_dark.jpg";
        fotoQueen = "queenDark"
    } else{
        imagenQueen.src = "./Imagenes/darkmode/queen.jpg";
        fotoQueen = "queenColor"
    }
    //Condicional foto Freddie
    if(fotoFreddie == "freddieColor"){
        imagenFreddie.src = "./Imagenes/darkmode/freddie_dark.jpg";
        fotoFreddie = "freddieDark";
    } else{
        imagenFreddie.src = "./Imagenes/darkmode/freddie.jpg";
        fotoFreddie = "freddieColor";
    }
    //Condicional foto Brian
    if(fotoBrian == "brianColor"){
        imagenBrian.src = "./Imagenes/darkmode/brian_dark.jpg";
        fotoBrian = "brianDark";
    } else{
        imagenBrian.src = "./Imagenes/darkmode/brian.jpg";
        fotoBrian = "brianColor";
    }
    //Condicional foto John
    if(fotoJohn == "johnColor"){
        imagenJohn.src = "./Imagenes/darkmode/john_dark.jpg";
        fotoJohn = "johnDark";
    }else{
        imagenJohn.src = "./Imagenes/darkmode/john.jpg";
        fotoJohn = "johnColor";
    }
    //Condicional foto Roger
    if(fotoRoger == "rogerColor"){
        imagenRoger.src = "./Imagenes/darkmode/roger_dark.png";
        fotoRoger = "rogerDark";
    }else{
        imagenRoger.src = "./Imagenes/darkmode/roger.jpg";
        fotoRoger = "rogerColor";
    }
    //Condicional ImagenFinal
    if(fotoQueenArg == "queenArgColor"){
        imagenQueenArg.src = "./Imagenes/darkmode/queen_arg_dark.png";
        fotoQueenArg = "queenArgDark";
    } else{
        imagenQueenArg.src = "./Imagenes/darkmode/queen_Arg.jpg";
        fotoQueenArg = "queenArgColor";
    }
}
//Prueba
// *** FIN DARK MODE ***