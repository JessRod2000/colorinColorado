const dbfirestore = firebase.firestore();

const contenedorCategorias = document.getElementById("categorias-container");
var controlar = "true";
var categoria, titulobox;
var fab = "true";
var fan = "true";
var clasi = "true";
var his = "true";
var ley = "true";
var terr = "true";
var existe = "true";
var otronivel="false";
var nivel;
window.addEventListener('DOMContentLoaded',categoriasCortos);
function categoriasCortos(){
    contenedorCategorias.innerHTML = `<select  name="combobox" id="categorias" class="formulario_input">
    <option value="Fabulas">Fábulas</option>
    <option value="Fantasia">Fantasía</option>
    <option value="Clasicos">Clásicos</option>
</select>`;
}