const dbstorage = firebase.storage();
const dbfirestore = firebase.firestore();

var ImgName, ImgUrl, Categoria, TituloCuento, ContenidoCuento, imagen,link, glosario;
var files = [];
var reader;
var controlar = "true";
//-----------para abrir el explorador de archivo-------------

document.getElementById("elegirArchivo").onclick = function(e){
    alert('Se recomienda que las dimensiones de alto y ancho de la imagen seleccionada sean iguales');
};
document.getElementById("formulario_registro").addEventListener("submit", function(event){
    event.preventDefault();
    validacion_titulo();
    contar_palabras_titulo();
    contar_palabras_contenido();
    Categoria = document.getElementById("categorias").value;
    TituloCuento = document.getElementById('titulobox').value;
    ContenidoCuento = document.getElementById('contenidobox').value;
    Categoria = document.getElementById("categorias").value;
    imagen = document.getElementById('elegirArchivo').files[0];
    link = document.getElementById('linkactividad').value;
    glosario = document.getElementById('glosario').value;
    pruebaRegistrar();   
    document.getElementById("formulario_registro").reset();
});
//-------------------------PRUEBA----------------------------------------
async function pruebaRegistrar(){
    await testTitulos();

if (controlar == "true") {
    await obtenerUrl();
    const response = dbfirestore.collection(Categoria).doc().set({ TituloCuento, ContenidoCuento, ImgUrl,link,glosario});
    alert('Cuento registrado');
} else {
    alert("arregle los campos");
    controlar = "true";
}
}

function testTitulos(){
return new Promise((resolve,reject)=>{
    var titulo = document.getElementById("titulobox").value;
        dbfirestore.collection('Historia').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                if(titulo == doc.data().TituloCuento){
                    controlar = "false";
                    text2.innerHTML = "El titulo ya se encuentra registrado en la bd";
                    console.log(controlar);
                }
            }
            );
    setTimeout(()=>{
        console.log("Hello from inside the testAsync function");
        resolve();
        ;} , 1000);
    });
    dbfirestore.collection('Leyendas').get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            if(titulo == doc.data().TituloCuento){
                controlar = "false";
                text2.innerHTML = "El titulo ya se encuentra registrado en la bd";
                console.log(controlar);
            }
        }
        );
setTimeout(()=>{
    console.log("Hello from inside the testAsync function");
    resolve();
    ;} , 1000);
});
dbfirestore.collection('Terror').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        if(titulo == doc.data().TituloCuento){
            controlar = "false";
            text2.innerHTML = "El titulo ya se encuentra registrado en la bd";
            console.log(controlar);
        }
    }
    );
setTimeout(()=>{
console.log("Hello from inside the testAsync function");
resolve();
;} , 1000);
});
});
}
function testLeyendas(){
return new Promise((resolve,reject)=>{
    var titulo = document.getElementById("titulobox").value;
        dbfirestore.collection('Leyendas').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                if(titulo == doc.data().TituloCuento){
                    controlar = "false";
                    registrar = 'false';
                    text2.innerHTML = "El titulo ya se encuentra registrado en la bd";
                    console.log(controlar);
                }
            });

    setTimeout(()=>{
        console.log("Hello from inside the testAsync function");
        resolve();
        ;} , 1000);
    });
});
}
function testTerror(){
return new Promise((resolve,reject)=>{
    var titulo = document.getElementById("titulobox").value;
        dbfirestore.collection('Terror').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                if(titulo == doc.data().TituloCuento){
                    controlar = "false";
                    registrar = 'false';
                    text2.innerHTML = "El titulo ya se encuentra registrado en la bd";
                    console.log(controlar);
                }
            });

    setTimeout(()=>{
        console.log("Hello from inside the testAsync function");
        resolve();
        ;} , 1000);
    });
});
}

//---------------obtener URL de la imagen subida al storage--------------------------
function obtenerUrl(){
return new Promise((resolve,reject)=>{
    var uploadTask = dbstorage.ref('Images_' + Categoria + '/' + TituloCuento + "_imagen.png").put(imagen);
    uploadTask.on('state_changed', function (snapshot) {},
        //---------------por si hay error----------------//
        function (error) {
            console('aqui')
            alert('error al guardar');
        },
        //---------------guardar el link de la imagen en database----------------//
        function (){
            uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                ImgUrl = url; 
                
                setTimeout(()=>{
                    console.log("Hello from inside the testAsync function");
                    resolve();
                ;} , 1000);
            });
        }
    );
});                     
}
//--------------------------------------------------------------------------------------------------------------------

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
        text2.innerHTML = "La cantidad máxima de palabras aceptadas es de 10";
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
    if(numeroPalabras>1500){
        text3.innerHTML = "La cantidad máxima de palabras aceptadas es de 1500";
        //alert("la cantidad máxima de palabras aceptadas es de 500");
        controlar=false;
        alert(numeroPalabras + "hola");
        //document.getElementById("contenidobox").value ="";
    }else if(numeroPalabras<500){
            text3.innerHTML = "La cantidad mínima de palabras aceptadas es de 500";
            alert(numeroPalabras + "hola");
            controlar=false;
        
    }
    //alert(numeroPalabras);
}
//-----------------validar el titulo-----------------

function validacion_titulo(){
    var titulobox = document.getElementById("titulobox").value;
    var text1 = document.getElementById("text1");
    var pattern = /^[A-Za-z\d\s\u00fc\u003f\u00bf\u0021\u00a1\u00f1\u00dc\u002c\u00b4\u00c1\u00e1\u00c9\u00e9\u00cd\u00ed\u00d3\u00f3\u00da\u00fa]+$/;
    
    if(titulobox.match(pattern)){
        text1.innerHTML = "";
    }
    else{
        controlar = false;
        text1.innerHTML = "Se aceptan caracteres alfanuméricos, ¿,?,!,¡";
    }
}