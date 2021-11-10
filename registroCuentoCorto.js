const dbstorage = firebase.storage();
const dbfirestore = firebase.firestore();

var ImgName, ImgUrl, Categoria, TituloCuento, ContenidoCuento, imagen;
var files = [];
var reader;
var controlar = true;
//-----------para abrir el explorador de archivo-------------

document.getElementById("elegirArchivo").onclick = function(e){
    alert('Se recomienda que las dimensiones de alto y ancho de la imagen seleccionada sean iguales');
};
document.getElementById("formulario_registro").addEventListener("submit", function(event){
    event.preventDefault();
    contar_palabras_titulo();
    contar_palabras_contenido();
        if(controlar==true){
            TituloCuento = document.getElementById('titulobox').value;
            ContenidoCuento = document.getElementById('contenidobox').value;
            Categoria = document.getElementById("categorias").value;
            imagen = document.getElementById('elegirArchivo').files[0];

            var uploadTask = dbstorage.ref('Images_'+Categoria+'/'+TituloCuento+"_imagen.png").put(imagen);

            uploadTask.on('state_changed',function(snapshot){
            },
        //---------------por si hay error----------------//
            function(error){
                alert('error al guardar');
            },
        //---------------guardar el link de la imagen en database----------------//
            function(){
                uploadTask.snapshot.ref.getDownloadURL().then(function(url){
                    
                    ImgUrl = url;
                    const response = dbfirestore.collection(Categoria).doc().set({TituloCuento,ContenidoCuento,ImgUrl});
                    alert('Cuento registrado');
                });
            });
        }else{
            alert("arregle los campos");
            controlar=true;
        }
    //document.getElementById("formulario_registro").reset();
});
//-----------------contar palabras------------------------
function contar_palabras_titulo(){
    //Obtenemos el texto del campo
    var titulo = document.getElementById("titulobox").value;
    //Reemplazamos los saltos de linea por espacios
    titulo = titulo.replace (/\r?\n/g," ");
    //Reemplazamos los espacios seguidos por uno solo
    titulo = titulo.replace (/[ ]+/g," ");
    //Quitarmos los espacios del principio y del final
    titulo = titulo.replace (/^ /,"");
    titulo = titulo.replace (/ $/,"");
    //Troceamos el texto por los espacios
    var textoTroceado = titulo.split (" ");
    //Contamos todos los trozos de cadenas que existen
    var numeroPalabras = textoTroceado.length;
    //Mostramos el número de palabras
    if(numeroPalabras>10){
        text2.innerHTML = "la cantidad máxima de palabras aceptadas es de 10";
        //alert("la cantidad máxima de palabras aceptadas es de 10");
        controlar=false;
    }else{
    }
    //alert(numeroPalabras);
}
function contar_palabras_contenido(){
    //Obtenemos el texto del campo
    var texto = document.getElementById("contenidobox").value;
    //Reemplazamos los saltos de linea por espacios
    texto = texto.replace (/\r?\n/g," ");
    //Reemplazamos los espacios seguidos por uno solo
    texto = texto.replace (/[ ]+/g," ");
    //Quitarmos los espacios del principio y del final
    texto = texto.replace (/^ /,"");
    texto = texto.replace (/ $/,"");
    //Troceamos el texto por los espacios
    var textoTroceado = texto.split (" ");
    //Contamos todos los trozos de cadenas que existen
    var numeroPalabras = textoTroceado.length;
    //Mostramos el número de palabras
    if(numeroPalabras>500){
        text3.innerHTML = "la cantidad máxima de palabras aceptadas es de 500";
        //alert("la cantidad máxima de palabras aceptadas es de 500");
        controlar=false;
        //document.getElementById("contenidobox").value ="";
    }else{
    }
    //alert(numeroPalabras);
}
//-----------------para subir al STORAGE de Firebase----------
/*
document.getElementById('registrar').onclick = function(){
    TituloCuento = document.getElementById('titulobox').value;
    ContenidoCuento = document.getElementById('contenidobox').value;
    Categoria = document.getElementById("categorias").value;
    imagen = document.getElementById('elegirArchivo').files[0];

    var uploadTask = dbstorage.ref('Images_'+Categoria+'/'+TituloCuento+"_imagen.png").put(imagen);

    uploadTask.on('state_changed',function(snapshot){
    },
 //---------------por si hay error----------------//
    function(error){
        alert('error al guardar');
    },
 //---------------guardar el link de la imagen en database----------------//
    function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            
            ImgUrl = url;
            const response = dbfirestore.collection(Categoria).doc().set({TituloCuento,ContenidoCuento,ImgUrl});
            alert('Cuento registrado');
        });
    });
    document.getElementById("formulario_registro").addEventListener("submit", function(event){
        event.preventDefault();

        //document.getElementById("formulario_registro").reset();
    });
}*/