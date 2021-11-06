
var files = [];
var reader;

document.getElementById("elegirArchivo").onclick = function(e){
    var input = document.createElement('input');
    input.type='file';

    input.onchange = e =>{
        files = e.target.files;
        reader  = new FileReader();
        reader.onload = function(){
            document.getElementById("myimg").src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();
}