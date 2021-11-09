const dbstorage = firebase.storage();
const dbfirestore = firebase.firestore();

var ImgName, ImgUrl, Categoria, TituloCuento, ContenidoCuento, imagen;
var files = [];
var reader;
//-----------para abrir el explorador de archivo-------------

document.getElementById("elegirArchivo").onclick = function(e){
    alert('Se recomienda que las dimensiones de alto y ancho de la imagen seleccionada sean iguales');
    
    //var input = document.createElement('input');
    //input.type='file';
/*
    input.onchange = e =>{
        files = e.target.files;
        reader  = new FileReader();
        reader.onload = function(){
            document.getElementById("myimg").src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();*/
}
document.getElementById("formulario_registro").addEventListener("submit", function(event){
    event.preventDefault();
    //document.getElementById("formulario_registro").reset();
});
//-----------------para subir al STORAGE de Firebase----------

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

        document.getElementById("formulario_registro").reset();
    });
}