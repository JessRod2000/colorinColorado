const db = firebase.firestore();

const cuentoTitulo = document.getElementById("cuento-titulo");
const cuentoContainer = document.getElementById("cuento-container");
const cuentoActividad = document.getElementById("cuento-actividad") 

const getCuento = () => db.collection('Terror').get();



window.addEventListener('DOMContentLoaded', async(e) =>{
   
    const querySnapshot = await getCuento();
      querySnapshot.forEach(doc =>{
        queryString=  location.search.substr(1);
        $_GET=[];
        for(ii in queryString){
        tmp=queryString.split('=');
        $_GET[tmp[1]]=unescape(tmp[1].split('+').join(' '));
        $_GET[tmp[0]]=unescape(tmp[0]);
        }
         if(doc.data().ImgUrl == $_GET[tmp[0]]){
              
          cuentoTitulo.innerHTML += `<div id="titulo">
          ${doc.data().TituloCuento}
          </div>`;
          const imagen =document.getElementById('myimg');
          imagen.style.height = "300px";
          imagen.src = doc.data().ImgUrl;
        
          cuentoContainer.innerHTML =`<div id="contenido"><h3>${saltoDeLinea(doc.data().ContenidoCuento)}</h3></div>`;
          cuentoActividad.innerHTML+=`<a href="${doc.data().link}" style="color: white;">Actividad</a>`;
         }
      })
      function saltoDeLinea(texto){
        return texto.replace(/\n/g,'<br/>')
      }
    
    })
  