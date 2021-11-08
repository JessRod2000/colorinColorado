const db = firebase.firestore();

const cuentoTitulo = document.getElementById("cuento-titulo");
const cuentoContainer = document.getElementById("cuento-container");



const getCuento = () => db.collection('Fantasia').get();


window.addEventListener('DOMContentLoaded', async(e) =>{
   
    const querySnapshot = await getCuento();
      querySnapshot.forEach(doc =>{
        queryString=  location.search.substr(1);
        $_GET=[];
        for(ii in queryString){
        tmp=queryString.split('=');
        $_GET[tmp[1]]=unescape(tmp[1].split('+').join(' '));
        $_GET[tmp[0]]=unescape(tmp[0]);
        $_GET[tmp[1]]=$_GET[tmp[1]].replace("	Ã¡","á");
        $_GET[tmp[1]]=$_GET[tmp[1]].replace("Ã©","é");
        $_GET[tmp[1]]=$_GET[tmp[1]].replace("Ã­","í");
        $_GET[tmp[1]]=$_GET[tmp[1]].replace("Ã³","ó");
        $_GET[tmp[1]]=$_GET[tmp[1]].replace("Ãº","ú");
        $_GET[tmp[1]]=$_GET[tmp[1]].replace("Ã¼","ü");
        $_GET[tmp[1]]=$_GET[tmp[1]].replace("Ã±","ñ");
       
        }

         // console.log(doc.data().TituloCuento)
          if(doc.data().TituloCuento == $_GET[tmp[1]]){
              
              cuentoTitulo.innerHTML += `<div id="titulo">
              ${doc.data().TituloCuento}
              </div>`
              recuperar($_GET[tmp[0]]);
              cuentoContainer.innerHTML += `<div id="contenido">
               <p>${doc.data().ContenidoCuento}</p>
              </div>`
          }
      })
      
      function recuperar(rutaImg){
        const imagen =document.getElementById('myimg');
            imagen.style.height = "300px";
            imagen.src = rutaImg;
      }
    
    })
    

