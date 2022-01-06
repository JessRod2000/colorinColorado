const db = firebase.firestore();

const cuentoTitulo = document.getElementById("cuento-titulo");
const cuentoContainer = document.getElementById("cuento-container");
const cuentoActividad = document.getElementById("actividades");


const getCuento = () => db.collection('Terror').get();



window.addEventListener('DOMContentLoaded', async(e) =>{
   
    const querySnapshot = await getCuento();
      let tmp;
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
          cuentoActividad.innerHTML+=`<div> 
          <button id="cuento-glosario" align="center" style="width: 25%;margin-right: 20%;float: right;color: white;">Glosario</button></div>
          <div>
          <button id="cuento-actividad" align="center" style="width: 25%;margin-left: 20%;"><a href="${doc.data().link}" target="_blank" style="color: white;">Actividad</a></button></div>

          <div id="glosario" aling="center"></div>`;
         /* Desde aqui*/
          cuentoGlosario =document.getElementById("glosario");
          document.getElementById("cuento-glosario").onclick= async(e) =>{
              cuentoGlosario.innerHTML =`<div id="onclick"></div>`;
              document.getElementById("onclick").innerHTML = `<h3>${saltoDeLinea(doc.data().glosario)}</h3>`;
          } 
        /* hasta aqui*/
        }
      })
      function saltoDeLinea(texto){
        return texto.replace(/\n/g,'<br/>')
      }
    
    })