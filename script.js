let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("vue");
        habilidades[6].classList.add("springboot");
        habilidades[7].classList.add("dockerkubernetes");
        habilidades[8].classList.add("wordpress");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajoEquipo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("proyectManagement");
        habilidades[14].classList.add("flexibilidad");
        habilidades[15].classList.add("resoluciondeproblemas");
        habilidades[16].classList.add("gestiondeltiempo");
        habilidades[17].classList.add("eticalaboral");
    }
}


//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

//Boton para descargar CV
function descargarPDF(){
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1Q_L0FzkRp2tkkte6mv3nXVkTWMx6smQI/view?usp=drive_link';
    link.download = 'CV-Fco. Javier Expósito Dávila.pdf';
    link.click();
}