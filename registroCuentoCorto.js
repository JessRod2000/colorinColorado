const dbstorage = firebase.storage();
const dbfirestore = firebase.firestore();

var ImgName, ImgUrl, Categoria, TituloCuento, ContenidoCuento;
var files = [];
var reader;
let inputs = document.querySelectorAll('input');
//-----------para abrir el explorador de archivo-------------
document.getElementById("elegirArchivo").onclick = function (e) {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        files = e.target.files;
        let nombArchivo = files[0].name;
        var extension = nombArchivo.split(".").slice(-1);
        extension = extension[0];
        let extensiones = ["jpg", "png", "jpeg", "PNG", "JPEG", "JPG"];
        if (extensiones.indexOf(extension) == -1) {
            alert("Extensión NO permitida");
        } else {
            reader = new FileReader();
            reader.onload = function () {
                document.getElementById("myimg").src = reader.result;
            }
            reader.readAsDataURL(files[0]);
        }
    }
    input.click();
}
//-----------------para subir al STORAGE de Firebase----------
document.getElementById('registrar').onclick = function () {
    TituloCuento = document.getElementById('titulobox').value;
    ContenidoCuento = document.getElementById('contenidobox').value;
    Categoria = document.getElementById("categorias").value;

    var uploadTask = dbstorage.ref('Images_' + Categoria + '/' + TituloCuento + "_imagen.png").put(files[0]);

    uploadTask.on('state_changed', function (snapshot) {
    },
        //---------------por si hay error----------------//
        function (error) {
            alert('error al guardar');
        },
        //---------------guardar el link de la imagen en database----------------//
        function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                ImgUrl = url;
                const response = dbfirestore.collection(Categoria).doc().set({ TituloCuento, ContenidoCuento, ImgUrl });
                alert('Cuento registrado');
                document.getElementById('titulobox').value = '';
                document.getElementById('contenidobox').value = '';
                document.getElementById("myimg").src = '';
            }
            );
        });
}